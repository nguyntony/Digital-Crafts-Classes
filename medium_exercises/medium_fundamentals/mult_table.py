list1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
list2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for x in list1:  # reads as for every item in list 1
    for j in list2:  # do this to every item in list 2
        total = x * j
        print(f"{x} * {j} = {total}")
    print("-" * 15)
