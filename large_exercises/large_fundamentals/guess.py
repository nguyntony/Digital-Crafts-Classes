import random


def PlayGame():
    correct = random.randint(1, 10)
    on = True
    attempts = 5

    print("Let's play a guessing game!\nGuess a number between 1 and 10.")
    while on:
        try:
            guess = int(input())
            if guess < 1 or guess > 10:
                print(f"{guess} is not a number between 1 and 10.")
                print("Try again.")
            elif guess == correct:
                print(
                    f"YES! I was thinking of the number: {correct}\nYou win!")
                PlayAgain()
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
                    PlayAgain()
        except ValueError:
            print("Please give a number!")


def PlayAgain():
    choice = input("Do you want to play again? ( Y / N ) ").lower()
    if choice == "y" or choice == "yes":
        PlayGame()
    else:
        print("Seeya!")
        on = False


PlayGame()
