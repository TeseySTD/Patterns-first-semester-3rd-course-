from agency import *
from house import *
from apartment import *
from room import *
from realtor import *
from estate_factory import *
from estate_to_buy_factory import *
from estate_to_rent_factory import *
from estate_to_sell_factory import *

def print_final_agency_state():
    agency = Agency.get_instance()
    print("Final state Agency:")
    # print(f"Apartments: {len(agency.apartments)}")
    # print(f"Realtors: {len(agency.realtors)}")
    # print(f"Rooms: {len(agency.rooms)}")
    # print(f"Houses: {len(agency.houses)}")

    RealEstate.print_all_info_about_estates(agency.apartments)
    RealEstate.print_all_info_about_estates(agency.rooms)
    RealEstate.print_all_info_about_estates(agency.houses)
    # agency.rent_or_sale_random_estates()
def create_and_start_user_threads(users_count):
    user_threads = []

    def thread_function(i):
        s = f"Thread {i + 1}"
        r = random.randint(0, 2)
        f = None
        if r == 0:
            f = EstateToBuyFactory()
        elif r == 1:
            f = EstateToRentFactory()
        else:
            f = EstateToSellFactory()
        test_agency(s, f)

    for i in range(users_count):
        thread = threading.Thread(target=thread_function, args=(i,))
        user_threads.append(thread)

    for thread in user_threads:
        thread.start()

    for thread in user_threads:
        thread.join()

def test_agency(thread_name, factory):
    agency = Agency.get_instance()
    add_test_data(agency, factory, thread_name)

def add_test_data(agency, factory, thread_name):
    agency.add_apartment(factory.create_estate("apartment"))
    agency.add_room(factory.create_estate("room"))
    agency.add_house(factory.create_estate("house"))


if __name__ == "__main__":
    print("Start testing... \n")
    create_and_start_user_threads(10)
    print_final_agency_state()