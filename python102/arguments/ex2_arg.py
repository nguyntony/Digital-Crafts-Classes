def movie(title, genre, year):
    info = {
        "title": title,
        "genre": genre,
        "year": year
    }
    i = 0
    for key in info:
        print(f"{i+1}. {key}: {info[key]}")
        i += 1


movie("Birds of Prey", "Action", 2018)
