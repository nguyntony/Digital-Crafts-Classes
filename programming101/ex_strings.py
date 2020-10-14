# Create a program that prints out the combination of two different strings.
first_name = "tony"
last_name = "nguyen"
print(first_name + " " + last_name)

# Print out a haiku that spans across multiple lines using only a single string.
print("This is a very boring haiku\nBut a boring haiku is not\nActually no\nNonsense")

# Create a program that prints the following 3 times:
person = "Jimmy"
today = "Tuesday"
emotion = "happy"


print(f"Hello {person},\nI hope that your {today} is going well.\nI'm personally really {emotion}.")

print("""
Hello {person}, 
I hope that your {today} is going well. 
I'm personally really {emotion}.
""")

print("Hello %s,\nI hope that your %s is going well.\nI'm personally really %s." %
      (person, today, emotion))
