def total_count(str_list):
    i = 0
    total_char = 0

    while i < len(str_list):
        # print(f"{str_list[i]}: {len(str_list[i].strip())}")
        # a = "".join(str_list).replace(" ", "")
        # print(f"this is {a}")
        char = len(str_list[i].replace(" ", ""))
        total_char += char
        i += 1

    return {
        "list_length": len(str_list),
        "total_chars": total_char
    }


a = ["I", "am", "awesome"]
b = ["a", "a", "a", "a", "a"]
c = ["hi there", "how is your day going?"]
print(total_count(a))
print(total_count(b))
print(total_count(c))

# d = "hi there"
# print(d.replace(" ", ""))
