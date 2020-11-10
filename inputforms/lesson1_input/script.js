let newGroup = document.createElement("optgroup")
newGroup.label = "Yellow"

let favColor = document.querySelector("#favorite-color")
favColor.append(newGroup)
let yellow1 = document.createElement("option")
let yellow2 = document.createElement("option")

yellow1.value = "yellow"
yellow2.value = "yellow"

yellow1.innerText = "YellowGem"
yellow2.innerText = "Bumblebee"

newGroup.append(yellow1)
newGroup.append(yellow2)