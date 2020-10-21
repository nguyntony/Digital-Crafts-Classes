start = True
coins = 0
print(f"You have {coins} coins.")

while start:
    decision = input("Do you want a coin? ").lower()
    if decision == "yes":
        coins += 1
        print(f"You have {coins} coins.")
    else:
        print("Goodbye.")
        print(f"You have {coins} coins.")
        start = False
