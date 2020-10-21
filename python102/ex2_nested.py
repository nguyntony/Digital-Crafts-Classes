shopping_list = [
    ['corn', 'potatoes', 'tomatoes'],
    ['milk', 'eggs', 'cheese', 'yogurt'],
    ['frozen pizza', 'popsicle']
]

categories = ["Veggies", "Cold Items", "Frozen Items"]

for index, category in enumerate(categories):
    print(f"{index + 1}: {category}")

    listindex = 0
    for index, item in enumerate(shopping_list[listindex]):
        print(f"\t{index + 1}: {item}")
    listindex += 1
