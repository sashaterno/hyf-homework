USE HYF;

-- Add a task with these attributes: title, description, created, updated, due_date, status_id, user_id

INSERT INTO
    task (
        title,
        description,
        created,
        updated,
        due_date,
        status_id,
        user_id
    )
values (
        'Make an order',
        'T-shirt',
        '2023-02-4 15:09:33',
        '2023-02-5 17:24:02',
        '2023-02-28 23:59:00',
        1,
        3
    );

-- Change the title of a task

UPDATE task SET title = 'Accept an order' WHERE id = 5;

-- Change a task due date

UPDATE task SET due_date = '2023-03-01 23:59:00' WHERE id = 5;

-- Change a task status

UPDATE task SET status_id = 3 WHERE id = 5;

-- Mark a task as complete

UPDATE task SET status_id = 2 WHERE id = 5;

-- Delete a task

DELETE FROM task WHERE id = 5;