num_list1 = [1, 2, 3, 4, 5]
num_list2 = [10, 20, 30, 40, 50]
product_list = []
index = 0

while index < len(num_list1):
    product_list.append(num_list1[index] * num_list2[index])
    index += 1

print(product_list)
