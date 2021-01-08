const layout = {
    partials: {
        header: '/partials/header',
        footer: '/partials/footer',
        flashMessages: '/partials/flashMessages'
    }
};

// instead of putting the messsages there, what we can do is create another object in this file, and it will link to the flashMessages. And then spread it when I need it.

const testLayout = {
    header: '/partials/header',
    footer: '/partials/footer',
}

const fmsg = {
    flashMessages: '/partials/flashMessages'
}

module.exports = {
    layout,
    testLayout,
    fmsg
}