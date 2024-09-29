from agency import *
from house import *
from apartment import *
from room import *
from realtor import *

def test_agency(thread_name):
    agency = Agency.get_instance()
    print(f"{thread_name}: Agency hash code = {hash(agency)}")
    add_test_data(agency, thread_name)

def add_test_data(agency, thread_name):
    agency.add_apartment(Apartment(f"Address {thread_name}", f"Description {thread_name}", 50, 100000, "New", 2))
    agency.add_realtor(Realtor(hash(thread_name), f"Realtor {thread_name}", "123-456-7890", f"realtor{thread_name}@example.com"))
    agency.add_room(Room(f"Room Address {thread_name}", f"Room Description {thread_name}", 20, 50000, "Old"))
    agency.add_house(House(f"House Address {thread_name}", f"House Description {thread_name}", 100, 200000, "Middle aged"))

def print_final_agency_state():
    agency = Agency.get_instance()
    print("Final state Agency:")
    print(f"Apartments: {len(agency.apartments)}")
    print(f"Realtors: {len(agency.realtors)}")
    print(f"Rooms: {len(agency.rooms)}")
    print(f"Houses: {len(agency.houses)}")

    RealEstate.print_all_info_about_estates(agency.apartments)
    RealEstate.print_all_info_about_estates(agency.rooms)
    RealEstate.print_all_info_about_estates(agency.houses)


def create_and_start_user_threads():
    threads = []
    for i in range(10):
        thread_name = f"Thread {i + 1}"
        thread = threading.Thread(target=test_agency, args=(thread_name,))
        threads.append(thread)
        thread.start()

if __name__ == "__main__":
    print("Start testing... \n")
    create_and_start_user_threads()
    print_final_agency_state()