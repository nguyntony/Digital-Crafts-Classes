list1 = [1, 2, "hi", "bye", 1, 2, "hi", "bye", 3, "hibye"]
# list2 = [1, 2, "hi", "bye", 3, "hibye"]
# list3 = list1 + list2

dedupe_list = list(dict.fromkeys(list1))
print(dedupe_list)

no_dupe = []
for i in list1:
    if i not in no_dupe:
        no_dupe.append(i)

print(no_dupe)
