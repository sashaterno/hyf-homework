USE HYF;

-- Get all the tasks assigned to users whose email ends in @spotify.com

SELECT task.title, user.email
FROM task
    JOIN user_task ON user_task.task_id = task.id
    JOIN user ON user_task.user_id = user.id
WHERE
    user.email LIKE '%@spotify.com';

-- Get all the tasks for 'Donald Duck' with status 'Not started'

SELECT
    user_task.task_id,
    task.title,
    user.name,
    status.name
FROM user_task
    JOIN user ON user.id = user_task.user_id
    JOIN task ON task.id = user_task.task_id
    JOIN status ON status.id = task.status_id
WHERE
    user.name = 'Donald Duck'
    AND status.name = 'Not started';

-- Get all the tasks for 'Maryrose Meadows' that were created in september (hint: month(created)=month_number)

SELECT
    task.id,
    user.name,
    task.title,
    status.name AS status_name
FROM user
    JOIN user_task ON user.id = user_task.user_id
    JOIN task ON task.id = user_task.task_id;

-- Find how many tasks where created in each month, e.g. how many tasks were created in october, how many tasks were created in november, etc. (hint: use group by)

SELECT
    count(id) AS total_task,
    MONTHNAME(created) AS month
FROM task
GROUP BY month;