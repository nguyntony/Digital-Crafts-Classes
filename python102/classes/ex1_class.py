class Vehicle:
    def __init__(self, category, wheels=4):
        self.category = category
        self.wheels = wheels

    # def greet(self):
    #     print(f"Hi I'm a {self.category}.")


sportscar = Vehicle("sportscar")
truck = Vehicle("truck", 16)
motorcycle = Vehicle("motorcycle", 2)
minivan = Vehicle("minivan")
bike = Vehicle("bike", 2)

vehicular = [sportscar, truck, motorcycle, minivan, bike]

for item in vehicular:
    print(f"{item.category} has {item.wheels} wheels.")

# bike.greet()
