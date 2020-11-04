end = 11
total = 0

for num in range(end):
    print(num)
    if num % 2 == 0 and num % 3 == 0:
        pass
    else:
        total += num

print(total)
