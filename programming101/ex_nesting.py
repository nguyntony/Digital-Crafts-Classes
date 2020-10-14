pet_name = input("Enter the name of your pet. ")

if len(pet_name) < 3:
    print("The name length is too short!")
elif len(pet_name) > 3:
    if pet_name == "Shadow":
        print("El Gato Diablo!")
    elif pet_name == "Daisy":
        print("Good Dog!")
    else:
        print(f"AWWWW sweet {pet_name}.")
