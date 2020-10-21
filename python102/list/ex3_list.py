# Using the code from exercise 2, prompt the user for which item the user thinks is the most interesting. Tell the user to use numbers to pick. (IE 0-3).

# When the user has entered the value print out the selection that the user chose with some sort of pithy message associated with the choice.


things = ["water bottle", "chapstick", "phone", "headphones"]

index = 0
while index < len(things):
    thing = things[index]
    print(f"{index}: {thing}")
    index += 1

print("What is the most interesting item?")

while True:
    try:
        choice = int(input("Pick a number between 0 - 3\n"))
        break
    except ValueError:
        print("Please enter an integer!")


try:
    if things[choice] == things[0]:
        print(f"You chose {things[0]}, you must be thirsty!")
    elif things[choice] == things[1]:
        print(f"You chose {things[1]}, your lips must be dry!")
    elif things[choice] == things[2]:
        print(
            f"You chose {things[2]}, get off your phone and pay attention in class!")
    elif things[choice] == things[3]:
        print(f"You chose {things[3]}, great!")
except IndexError:
    print("You did not choose a number between 0 - 3!")
