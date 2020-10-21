list1 = [
    [1, 2],
    [10, 20]
]

list2 = [
    [3, 4],
    [30, 40]
]

new_list = [
    [0, 0],
    [0, 0]
]

# index = 0
# index2 = -1
# for num1 in list1[index]:
#     print(num1)

#     for num2 in list2[index]:

#         new_list.append(num1 + num2)

#     index += 1

# print(new_list)

for i in range(len(list1)):
    for j in range(len(list1[0])):
        new_list[i][j] = list1[i][j] + list2[i][j]

for r in new_list:
    print(r)

print(len(list1))
print(len(list1[0]))
