movie_stars = ["person1", "person2", "person3"]

for index, actor in enumerate(movie_stars):
    print(f"{index + 1}: {movie_stars[index]}")

# OR

index = 0
for actor in movie_stars:
    print(f"{index + 1}: {actor}")
    index += 1
