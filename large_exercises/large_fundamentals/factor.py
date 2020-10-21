num = int(input("Give a number: "))
max_range = num + 1
factors = []

for i in range(1, max_range):
    if num % i == 0:
        factors.append(i)

print(f"The factors of {num} is:\n{factors}")
