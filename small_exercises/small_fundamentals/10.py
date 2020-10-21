# x = int(input("How big is the square? "))

# i = 0
# while i < x:
#     print("*" * x)
#     i += 1


rows = int(input("How big is the square? "))
stars = "*" * rows
print(f"{stars}\n" * rows)
