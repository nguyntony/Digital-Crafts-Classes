width = int(input("Width? "))
# I am substracting 2 because the first and last column will have stars while the center is whitespace.
height = int(input("Height? ")) - 2

outline = "*" * width  # this will be used for the first and last rows.

# this number is necessary because each line will have this many whitespaces in the center.
center_width = width - 2
# so if the width is a total of 10 then we will substract 2 because
# 1 start in the beginning and end will be 2 and then 8 spaces in between.

# we used the variable above to create the line with a total of width spaces but with 2 less spaces for the stars.
center_row = "*" + (" " * center_width) + "*"
# this create that line from the value we did above.
# we are concantenating the stars in the front and end and we multiply the value we got from above with an empty string.

print(outline + "\n" + (center_row + "\n") * height + outline)
# this is all of it put together.
# the first and last row will be outline
# and then the center rows will be multiplied by the height
# which we substracted 2 from because of the first and last row.

width = int(input("Width? "))
height = int(input("Height? ")) - 2

outline = "*" * width
center_width = width - 2
center_row = "*" + (" " * center_width) + "*"

print(outline + "\n" + (center_row + "\n") * height + outline)
