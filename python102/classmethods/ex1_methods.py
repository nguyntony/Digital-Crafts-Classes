class Vehicle:
    def __init__(self, category, top_speed, acceleration, wheels=4, speed=0, position=0):
        self.category = category
        self.top_speed = top_speed
        self.acceleration = acceleration
        self.wheels = wheels
        self.speed = speed
        self.position = position

    def move(self):
        self.accelerate()
        self.position += self.speed

    def accelerate(self):
        self.speed += self.acceleration
        if self.speed > self.top_speed:
            self.speed = self.top_speed

    def race(self):
        i = 0
        while i <= 20:
            self.move()
            if i == 20:
                # or i == 40 or i == 60:
                print(
                    f"{i} seconds: {self.category}, is at {self.speed} speed, and is at {self.position} position.")
            i += 1


class Sport(Vehicle):

    def __init__(self, turbo):
        super().__init__
        self.turbo = turbo

    def accelerate(self):
        super().accelerate()


class Motorcycle(Vehicle):
    pass


car1 = Vehicle("minivan", 100, 4)
car2 = Vehicle("motorcycle", 80, 6)
car3 = Vehicle("bike", 60, 2)

contestants = [car1, car2, car3]

for car in contestants:
    car.race()
    print("-"*50)
