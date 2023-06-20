#!/usr/bin/python3
"""
script that lists all
states with a name starting
with N (upper N) from the database hbtn_0e_0_usa
"""

import MySQLdb as db
from sys import argv

if __name__ == '__main__':
    """
    connect to db
    """
    db_connect = db.connect(host="localhost", port=3306,
                            user=argv[1], passwd=argv[2], db=argv[3])
    db_cursor = db_connect.cursor()

    db_cursor.execute(
        "SELECT * FROM states WHERE name LIKE BINARY 'N%' \
                ORDER BY states.id ASC")

    rows = db_cursor.fetchall()

    for i in rows:
        print(i)
