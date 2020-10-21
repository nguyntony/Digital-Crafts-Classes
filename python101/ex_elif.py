my_num = 50
user_num = int(
    input("Hey, let's play a game. Guess what number I'm thinking. "))

if user_num > 50:
    print("Whoa! That number is too large!")
elif user_num < 50:
    print("Hmmm...that number is too low..")
elif user_num == my_num:
    print("WOWZERS! That is correct!")
