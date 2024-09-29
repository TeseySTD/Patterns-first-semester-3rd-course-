from threading import Lock
from typing import List
from real_estate import *
from apartment import *
from room import *
from house import *
import sys

class EstatePool:
    _pool = []
    _lock = Lock()

    @staticmethod
    def get_instance(type_: str):
        with EstatePool._lock:
            for i, estate in enumerate(EstatePool._pool):
                if estate.__class__.__name__.lower() == type_.lower():
                    print(f"{type_} with hash {hash(estate)} was returned.")
                    return EstatePool._pool.pop(i)
            
            instance = EstatePool.estate_factory(type_)
            # print(f"{type_} with hash {hash(instance)} was created.")
            return instance

    @staticmethod
    def estate_factory(type_: str):
        type_ = type_.lower()
        if type_ == "apartment":
            return Apartment()
        elif type_ == "room":
            return Room()
        elif type_ == "house":
            return House()
        else:
            raise Exception("Wrong type of estate")

    @staticmethod
    def release_instance(instance):
        with EstatePool._lock:
            instance.reset()
            EstatePool._pool.append(instance)