br = '\n'
# Write a program that prints out the results of the following statments:
print("1 == 3:", 1 == 3)
print("4 <= 4:", 4 <= 4)
print("'a' == 'a':", "a" == "a")
print("10 > 11:", 10 > 11)
print("'b' > 'c':", "b" > "c")
print(br)

# Write a program that assigns the variable "my_number" any number of your choice. And prints out the results of any comparison with 3 different numbers of your choosing.
my_number = 5
print("my number is:", my_number)
print("my_number > 1:", my_number > 1)
print("my_number == 10:", my_number == 10)
print("my_number < 3:", my_number < 3)
print(br)

# Write a program that assigns the varaible "name" a string.
name = "blue"
print("name:", name)

another_name = "blue"
print("another name:", another_name)
if name == another_name:
    print("YES! these strings are the same!")

color = "red"
if name == color:
    print("YES! these strings are the same!")
elif name != color:
    print("NO! these strings are not the same!")
