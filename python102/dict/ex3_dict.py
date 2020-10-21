people = [
    {
        "name": "Tyler",
        "phone": "broken phone, sorry",
        "email": "no internet for email, sorry"
    },

    {
        "name": "Michelle",
        "phone": 911,
        "email": "mich@hotmail.com"
    },

    {
        "name": "Misty",
        "phone": "error 404",
        "email": "mistymisty@gmail.com"
    }
]

for person in people:
    print(person)
    print("*" * 10)

    for key in person:
        print(key, person[key])
