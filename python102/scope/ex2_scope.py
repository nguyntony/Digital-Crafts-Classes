name = "Tyler"


def greet(change_name):
    global name
    name = change_name
    print(f"name is now {name}")


greet("Tony")
greet("Did it change?")
greet("Yes it did change!")
