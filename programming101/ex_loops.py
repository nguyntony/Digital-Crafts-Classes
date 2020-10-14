# Create a program that will print from 1-10 using a while loop.

i = 1
while i < 11:
    print(i)
    i += 1


# Create a program that will print from 10-1 using a while loop.

i = 10
while i > 0:
    print(i)
    i -= 1


# execise 3
username = "tonynguyen"
password = "123"

attempts = 0
attempts_left = 3

while attempts < 3:
    user_input = input("Username: ")
    pass_input = input("Password: ")

    if username == user_input and password == pass_input:
        print("Welcome message!")
        attempts += 10
    else:
        attempts += 1
        attempts_left -= 1

        if attempts_left < 3 and attempts_left != 0:
            print("Incorrect username or password. Please try again.")
            print(
                f"You have {attempts_left} attempts left before your account is terminated.")
        else:
            print("You do not have any attempts left.")
            print("Your account has been terminated.")
