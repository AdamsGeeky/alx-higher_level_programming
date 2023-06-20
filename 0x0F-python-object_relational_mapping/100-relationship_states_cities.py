#!/usr/bin/python3
"""
Improve the files model_city.py and model_state.py,
and save them as relationship_city.py and relationship_state.py
"""

from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from sys import argv
from relationship_state import Base, State
from relationship_city import City

if __name__ == "__main__":
    database = 'mysql+mysqldb://{}:{}@localhost:3306/{}'.format(
        argv[1], argv[2], argv[3])
    engine = create_engine(database)
    Base.metadata.create_all(engine)
    Session = sessionmaker(bind=engine)

    session = Session()
    california_state = State(name='California')
    sanfrasisco_city = City(name='San Francisco')
    california_state.cities.append(sanfrasisco_city)

    session.add(california_state)
    session.commit()
    session.close()
