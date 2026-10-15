import sys
import os
import sqlite3
import pandas

'''
Call this from the command line, and pass in the file path of the csv input
file, and it will import the csv into the database (overwrite)

ex: python3 ./src/csv_to_db.py ~/downloads/data.csv
'''

def drop_table(connection: sqlite3.Connection, tableName: str):
    connection.execute(f"""DROP TABLE IF EXISTS {tableName}""").fetchall()

def print_table_info(connection: sqlite3.Connection, tableName: str):
    print(connection.execute(f"""PRAGMA table_info({tableName})""").fetchall())

def print_db(connection: sqlite3.Connection, tableName: str):
    print(connection.execute(f"SELECT * FROM {tableName} WHERE 1 = 1").fetchall())

def main():
    database_path = os.path.abspath(os.path.join('data', 'data.db'))
    # csv_path = sys.argv[1]
    csv_path = "~/downloads/sdsu.csv"

    csv = pandas.read_csv(csv_path)

    db = sqlite3.connect(database_path)

    # Create courses table
    drop_table(db, "Courses")

    db.execute("""CREATE TABLE Courses (
    courseCode VARCHAR(8) PRIMARY KEY UNIQUE NOT NULL,
    courseTitle TEXT,
    courseDescription TEXT,
    units SMALLINT
    );""")

    for i in range(len(csv)):
        db.execute(f"""
        INSERT INTO Courses (courseCode, courseTitle, courseDescription, units)
        VALUES ("{csv.loc[i, 'course_code']}", "{csv.loc[i, 'course_title']}", 
                "{csv.loc[i, 'description']}", {csv.loc[i, 'units']});
        """)

    # Create CoursePrereq table   
    drop_table(db, "CoursePrereq")

    db.execute("""
    CREATE TABLE CoursePrereq (
    courseCode VARCHAR(8) NOT NULL,
    prereq TEXT NOT NULL,
    PRIMARY KEY (courseCode, prereq)
    );""")

    for i in range(len(csv)):
        db.execute(f"""
        INSERT INTO CoursePrereq (courseCode, prereq) 
        VALUES ("{csv.loc[i, 'course_code']}", "{csv.loc[i, 'prerequisites']}")
        """)


if __name__ == "__main__":
    main()