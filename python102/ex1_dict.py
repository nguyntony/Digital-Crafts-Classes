siblings = {}

# for a list you can not create a new index but in a dictionary you can create a new key with the value at any time.

siblings["name"] = "Misty"
siblings["age"] = 15
siblings["fav_colors"] = ["pink", "yellow"]

siblings["fav_colors"].append("blue")

print(siblings)

# loop

# key
for key in siblings:
    print(key)

# values
for key in siblings:
    print(siblings[key])

# key and values

for key in siblings:
    print(key, siblings[key])
