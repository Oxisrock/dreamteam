-- Up
CREATE TABLE Players (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    position TEXT,
    country TEXT,
    team TEXT
);

-- Down
DROP TABLE Players;