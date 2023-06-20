#!/usr/bin/python3
"""
This script adds the State object
`Louisiana` to the database `hbtn_0e_6_usa`.
"""

from sys import argv
from model_state import State, Base
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

if __name__ == "__main__":
    """
    script that adds the State object “Louisiana” to the database hbtn_0e_6_usa
    """

    database = "mysql+mysqldb://{}:{}@localhost:3306/{}".format(
        argv[1], argv[2], argv[3])

    engine = create_engine(database)
    Session = sessionmaker(bind=engine)

    session = Session()

    another_state = State(name="Louisiana")
    session.add(another_state)
    session.commit()

    print('{0}'.format(another_state.id))
    session.close()
