#!/usr/bin/python3
"""
Python file similar to model_state.py
named model_city.py that
contains the class definition of a City
"""

from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from sys import argv
from model_state import State, Base
from model_city import City

if __name__ == "__main__":
    database = "mysql+mysqldb://{}:{}@localhost:3306/{}".format(
        argv[1], argv[2], argv[3])

    engine = create_engine(database)
    Session = sessionmaker(bind=engine)

    session = Session()

    results = session.query(City, State).join(State)

    for city, state in results.all():
        print("{}: ({}) {}".format(state.name, city.id, city.name))

    session.commit()
    session.close()
