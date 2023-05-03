const knex = require("knex")({
    client: "mysql2",
    connection: {
        host: process.env.DB_HOST || "127.0.0.1",
        port: process.env.DB_PORT || 3306,
        user: process.env.DB_USER || "root",
        password: process.env.DB_PASSWORD || "root",
        database: process.env.DB_NAME || "hyf_node_week3_warmup",
        multipleStatements: true,
    },
});

const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

const apiRouter = express.Router();
app.use("/api", apiRouter);

const contactsAPIRouter = express.Router();
apiRouter.use("/contacts", contactsAPIRouter);

contactsAPIRouter.get("/", async (req, res) => {
    let query = knex.select("*").from("contacts");

    if ("sort" in req.query) {
        const splitQuery = req.query.sort.toString().split(" ");
        if (splitQuery.length > 0) {
            query = query.orderBy(splitQuery[0], splitQuery[1]);
        }
    }
    console.log("SQL", query.toSQL().sql);

    try {
        const data = await query;
        res.json({ data });
    } catch (e) {
        console.error(e);
        res.status(500).json({ error: "Error" });
    }
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

// I guess sql injection vulnerability is if sort === id; drop table test, the DB will drop the table test. But if the sort===id drop table test, it cant work. So maybe the solution is unpunctuate strings.