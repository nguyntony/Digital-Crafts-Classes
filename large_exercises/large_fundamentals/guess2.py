import random

on = True
attempts = 5
guess = None

print("Let's play a guessing game!\nGuess a number 1 and 10.")

while on:
    # correct = random.randint(1, 10)

    while True:
        try:
            guess = int(input())
            break
        except ValueError:
            print("Please give a number!")

    correct = random.randint(1, 10)
    print(correct)

    if guess < 1 or guess > 10:
        print(f"{guess} is not a number between 1 and 10.")
        print("Try again.")
    elif guess == correct:
        print(
            f"YES! I was thinking of the number: {correct}\nYou win!")
        # I need this to ask if we want to play again
        decision = input("Play again? ( Y / N ) ").lower()
        if decision == "no" or decision == "n":
            print("Goodbye!")
            on = False
        else:
            print("Guess another number!")
    else:
        if guess < correct:
            print("Your guess is too low.")
        else:
            print("Your guess is too high.")
        print("NOPE! Try again.")

        attempts -= 1
        if attempts != 0:
            print(f"You have {attempts} remaining guesses.")
        else:
            print("You ran out of guesses!")
            print("You lose!")
            # I need to ask to see if they wanna play again.
            decision = input("Play again? ( Y / N ) ").lower()
            if decision == "no" or decision == "n":
                print("Goodbye!")
                on = False
            else:
                print("Guess another number!")
