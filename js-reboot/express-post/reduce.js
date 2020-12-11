app.get("/order", (req, res) => {

    let newObj = {};

    coffee.reduce((obj, item) => {
        if (!obj[item.order]) {
            obj[item.order] = 0;
        }
        obj[item.order] += item.cost;
        return newObj;
    }, newObj);

    console.log(newObj);

    const keys = Object.keys(newObj);
    const keyLinks = keys
        .map((k) => {
            return `<li><a href="/order/${k}" target="_blank">${k} - ${newObj[
                k
            ].toFixed(2)}</a></li>`;
        })
        .join("");