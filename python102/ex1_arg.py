def product(a, b):
    try:
        if type(a) == int and type(b) == int:
            print(a * b)
        else:
            print("I need 2 integers!")
    except TypeError:
        print("I need 2 integers!")


product(1, "f")
product("f", "f")
product(1, 2)
product(3, 4)
product(5, 6)
