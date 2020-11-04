let spaceship = {
    speed: 50,
    acceleration: 25,
    passengers: 30,
    fuel: 100
}

spaceship["payload"] = 20
spaceship.fuel -= spaceship.fuel / 3

for (prop in spaceship) {
    if (!spaceship.hasOwnProperty(prop)) continue;
    console.log(prop, spaceship[prop])
}

