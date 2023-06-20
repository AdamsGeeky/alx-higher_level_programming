#!/usr/bin/python3
"""
script that takes in arguments and displays all values
in the states table of hbtn_0e_0_usa where name matches the argument.
But this time, write one that is safe from MySQL injections!
"""

from sys import argv
import MySQLdb as db

if __name__ == "__main__":
    db_connect = db.connect(host="localhost", port=3306,
                            user=argv[1], passwd=argv[2], db=argv[3])

    db_cursor = db_connect.cursor()
    db_cursor.execute(
        "SELECT * FROM states WHERE name LIKE \
                    BINARY %(name)s ORDER BY states.id ASC", {'name': argv[4]})

    rows = db_cursor.fetchall()

    for i in rows:
        print(i)
