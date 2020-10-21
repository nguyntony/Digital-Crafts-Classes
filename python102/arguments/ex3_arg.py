def movie(stuff):  # you will use a list to pass one parameter.
    info = {
        "title": stuff[0],
        "genre": stuff[1],
        "year": stuff[2]
    }

    i = 1
    for key in info:
        print(f"{i}. {key}: {info[key]}")
        i += 1


a = ["Birds of Prey", "Action", 2018]
movie(a)
