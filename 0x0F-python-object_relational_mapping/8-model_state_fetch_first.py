#!/usr/bin/python3
"""
script that prints the first
State object from the database hbtn_0e_6_usa
"""

from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from sys import argv
from model_state import State, Base

if __name__ == "__main__":

    database = "mysql+mysqldb://{}:{}@localhost:3306/{}".format(
        argv[1], argv[2], argv[3])

    engine = create_engine(database)
    Session = sessionmaker(bind=engine)

    session = Session()

    state = session.query(State).order_by(State.id).first()
    if state is not None:
        print('{0}: {1}'.format(state.id, state.name))
    else:
        print("Nothing")
