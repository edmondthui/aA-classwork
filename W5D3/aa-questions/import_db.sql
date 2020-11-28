DROP TABLE IF EXISTS question_likes;
DROP TABLE IF EXISTS replies;
DROP TABLE IF EXISTS question_follows;
DROP TABLE IF EXISTS questions;
DROP TABLE IF EXISTS users;

PRAGMA foreign_keys = ON;

CREATE TABLE users (
    id INTEGER PRIMARY KEY,
    fname VARCHAR NOT NULL,
    lname VARCHAR NOT NULL
);

CREATE TABLE questions (
    id INTEGER PRIMARY KEY,
    title VARCHAR NOT NULL,
    body VARCHAR NOT NULL,
    users_id INTEGER NOT NULL,

    FOREIGN KEY (users_id) REFERENCES users(id)
);

CREATE TABLE question_follows (
    id INTEGER PRIMARY KEY,
    users_id INTEGER NOT NULL,
    questions_id INTEGER NOT NULL,

    FOREIGN KEY (users_id) REFERENCES users(id),
    FOREIGN KEY (questions_id) REFERENCES questions(id)

);

CREATE TABLE replies (
    id INTEGER PRIMARY KEY,
    parent_id INTEGER,
    question_id INTEGER NOT NULL,
    reply_body VARCHAR NOT NULL,
    users_id INTEGER,

    FOREIGN KEY (question_id) REFERENCES questions(id),
    FOREIGN KEY (parent_id) REFERENCES replies(id),
    FOREIGN KEY (users_id) REFERENCES users(id)
 
);

CREATE TABLE question_likes (
    id INTEGER PRIMARY KEY,
    users_id INTEGER NOT NULL,
    question_id INTEGER NOT NULL,

    FOREIGN KEY (users_id) REFERENCES users(id),
    FOREIGN KEY (question_id) REFERENCES questions(id)
);


INSERT INTO 
    users(fname, lname)
VALUES
    ('Amgaa', 'Khos'),
    ('Edmond', 'Hui'); 


INSERT INTO 
    questions(title, body, users_id)
VALUES
    ('How do we do SQL???', 'ORM IS SO HARD', (SELECT id FROM users WHERE fname = 'Edmond')),
    ('How do we install SQL???', 'I do not know how many versions of SQL I have on my computer', (SELECT id FROM users WHERE fname = 'Amgaa'));



INSERT INTO
    question_follows(users_id, questions_id)
VALUES
    ((SELECT id FROM users WHERE fname = 'Amgaa'), (SELECT id FROM questions WHERE title = 'How do we do SQL???')); --how to find user id for question follower?



INSERT INTO
    replies(parent_id, question_id, reply_body, users_id)
VALUES
    (NULL, (SELECT id FROM questions WHERE title = 'How do we do SQL???'), 'Big brain! text of actual reply', (SELECT id FROM users WHERE fname = 'Amgaa'));


INSERT INTO
    question_likes(users_id, question_id)
VALUES
    ((SELECT id FROM users WHERE fname = 'Amgaa'), (SELECT id FROM questions WHERE title = 'How do we do SQL???')),
    ((SELECT id FROM users WHERE fname = 'Edmond'), (SELECT id FROM questions WHERE title = 'How do we do SQL???'));