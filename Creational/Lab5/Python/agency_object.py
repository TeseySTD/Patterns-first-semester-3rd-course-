from abc import ABC
class AgencyObject(ABC):
    _max_id = 0

    def __init__(self):
        self.id = AgencyObject._max_id
        AgencyObject._max_id += 1