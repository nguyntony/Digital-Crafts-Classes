let urlParams = new URLSearchParams(window.location.search);

// urlParams.forEach(param => console.log(param))
for (key of urlParams.keys()) {
    console.log(key, urlParams.get(key))
}