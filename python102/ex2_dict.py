person = {
    "first_name": "Tony",
    "last_name": "Nguyen",
    "age": 24,
    "hair_color": "black"
}

print(person)

for key in person:
    print(f"{key}: {person[key]}")


print(f"Hello {person['first_name']} {person['last_name']}! You are {person['age']} years old and you have {person['hair_color']} hair.")
