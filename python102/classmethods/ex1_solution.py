class Vehicle:
    def __init__(self, category, top_speed, acceleration, wheels=4):
        self.category = category
        self.wheels = wheels
        self.top_speed = top_speed
        self.acceleration = acceleration
        self.position = 0
        self.speed = 0
        self.race_stats = {}

    def move(self):
        self.accelerate()
        self.position += self.speed

    def accelerate(self):
        self.speed += self.acceleration
        if self.speed > self.top_speed:
            self.speed = self.top_speed


# car1 = Vehicle("car1", 100, 4)
# car2 = Vehicle("car2", 80, 6)

all_cars = {
    "car1": Vehicle("car1", 100, 4),
    "car2": Vehicle("car2", 80, 6),
    "car3": Vehicle("car3", 60, 2),
    "car4": Vehicle("car4", 120, 5)
}

print("20 seconds")
for i in range(20):
    print(f"***Second {i}***")
    for car in all_cars:
        all_cars[car].move()
        print(f"{car} - {all_cars[car].speed}")

for car in all_cars:
    print(f" {car} - {all_cars[car].position}")
