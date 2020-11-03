let temp = 50
let color = null
switch (true) {
    case (temp < 0):
        color = "#547199"
        break;
    case (temp < 30):
        color = "#688EC2"
        break;
    case (temp < 50):
        color = "#CCA363"
        break;
    case (temp < 75):
        color = "#EDBE74"
        break;
    case (temp < 80):
        color = "#B23737"
        break;
    case (temp < 90):
        color = "#F73636"
        break;
}

console.log(color)