width = int(input("How wide do you want your triangle? "))

# if the number is even the point of the triangle will be 2 stars, so this will give us an odd number so that the point will be 1 star.
if width % 2 == 0:
    width += 1

star_amount = 1
whitespace = (width - 1) // 2


while star_amount <= width:
    star = "*" * star_amount
    white = " " * whitespace
    print(white + star + white)

    star_amount += 2
    whitespace -= 1

    # here we are disregard the formula above and just subtract 1 from each iteration, this number is halved of the total amount of white spaces because we want an even number of whitespaces around the star. so technically we are subtracting 2 whitespaces and adding 2 stars.
