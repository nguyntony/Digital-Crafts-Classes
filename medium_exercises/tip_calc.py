bill = float(input("How much is your bill?\n"))
service = input("How is the service: Good, Fair or Bad\n".lower())

good = 0.2
fair = 0.15
bad = 0.1

if service == "good":
    tip = bill * good
    total = bill * 1.2
elif service == "fair":
    tip = bill * fair
    total = bill * 1.15
elif service == "bad":
    tip = bill * bad
    total = bill * 1.1

print(f"Your tip amount is: {tip}.")
print(f"Your total amount is: {total}.")
