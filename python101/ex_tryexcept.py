# try:
#     if 2 > "3":
#         print("Never Prints!")
# except TypeError:
#     print("The program doesn't crash now!")

# try:
#     impossible = 100/0
# except TypeError:
#     # this is the wrong error type
#     print("This does not print!")
# except ZeroDivisionError:
#     print("You cannot divide by 0.")

# condition = True
# while condition:
#     try:
#         num_input = int(input("Please enter a number. "))
#         condition = False

#         while num_input > -1:
#             print(num_input)
#             num_input -= 1
#     except ValueError:
#         print("Please give a number!")

try:
    num1 = int(input("Please give me a number! "))
    num2 = int(input("Please give me another number! "))
    print(f"Your numbers are {num1} and {num2}.")

    # sum of numbers
    add = num1 + num2
    print("The sum of your numbers are:", add)

    # multiplication of numbers
    multiply = num1 * num2
    print("The product of your numbers are:", multiply)

    # division of numbers
    divide = num1 / num2
    print("The quotient of your numbers are:", divide)

except ZeroDivisionError:
    print("I tried to give you the quotient of your numbers but I cannot divide by 0.")
    # try:
    #     num2 = int(input("Try a different number. "))
    #     divide = num1 / num2
    #     print("The quotient of your numbers are:", divide)
    # except ValueError:
    #     print("I need a number.")
except ValueError:
    print("I needed a number but you didn't give me one.")

# if num2 == 0:
#     num2 = int(input("Try a different number!"))
#     divide
#     print(f"The quotient of {num1}/{num2}:", divide)
