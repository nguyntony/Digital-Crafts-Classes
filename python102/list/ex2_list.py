# Create a program that contains a list of 4 different "things" around you.

things = ["water bottle", "chapstick", "phone", "headphones"]


# Print out the each item on a new line with the number of it's index in front of the item.

index = 0
while index < len(things):
    # thing = things[index] if you create a variable but you don't use it more than once, then it isn't necessary.
    print(f"{index}: {things[index]}")
    index += 1
