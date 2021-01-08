const { layout, testLayout, fmsg } = require("../layout")
const getFlashMessages = require("../messages")
const { Friend } = require("../models")
const { Pet } = require("../models")

const home = (req, res) => {
    res.render("home", {
        partials: {
            ...testLayout,
            // ...fmsg
        },
        locals: {
            title: 'homepage ',
            // messages: getFlashMessages(req)
        }
    })
}

const listFriends = async (req, res) => {
    const friends = await Friend.findAll()

    // console.log(getFlashMessages(req))

    res.render("address-book/list", {
        ...layout,
        locals: {
            title: "Address Book",
            friends,
            messages: getFlashMessages(req)
        }
    })
}

const addFriendForm = async (req, res) => {
    res.render("address-book/form", {
        ...layout,
        locals: {
            title: 'Add a Friend',
            messages: getFlashMessages(req)
        }
    })
}

const processFriend = async (req, res) => {
    const { name, address, email, phone } = req.body
    const newFriend = await Friend.create({ name, address, email, phone })

    // add the messasge here, redirect to addressbook
    if (newFriend) {
        req.flash("success", `${newFriend.name} has been added.`)
    } else {
        req.flash("error", "Something happened to your friend.")
    }
    res.redirect("/addressbook")
}

const getFriend = async (req, res) => {
    const { friendID } = req.params
    const findFriend = await Friend.findOne({
        where: {
            id: friendID
        }
    })

    const findPet = await Pet.findAll({
        where: {
            FriendId: friendID
        }
    })

    let pets;

    if (!findPet) {
        pets = ""
    }

    res.render("address-book/friend", {
        ...layout,
        locals: {
            title: findFriend.name,
            friend: findFriend,
            pets: findPet,
            messages: getFlashMessages(req)
        }
    })
}

const editForm = async (req, res) => {
    const { friendID } = req.params
    const findFriend = await Friend.findOne({
        where: {
            id: friendID
        }
    })

    res.render("address-book/editForm", {
        ...layout,
        locals: {
            title: "Update",
            friend: findFriend,
            messages: getFlashMessages(req)
        }
    })
}

const processEditForm = async (req, res) => {
    const { friendID } = req.params
    const { name, address, email, phone } = req.body
    const findFriend = await Friend.update({
        name,
        address,
        email,
        phone
    }, {
        where: {
            id: friendID
        }
    })

    res.redirect("/addressbook")
}

const showDelForm = async (req, res) => {
    const { friendID } = req.params
    const findFriend = await Friend.findOne({
        where: {
            id: friendID
        }
    })

    res.render("address-book/delForm", {
        ...layout,
        locals: {
            title: "Delete Confirmation",
            friend: findFriend,
            // errMsg: req.flash("error")
            // we are passing only one argument and it understands to read the message associated with the arg.
            messages: getFlashMessages(req)

            // what is going on here? 
            // I am running a fn that will return an object, the object will return
            // {
            //     error: req.flash("error"),
            //     success: req.flash("success"),
            //     alert: req.flash("alert")
            // }
            // so this object is set equal to messages.
            // when I call this fn, in the sessions file I will be able to see a attribute named flash
            // go down to the process delte form in the else statment
        }
    })
}

const processDelForm = async (req, res) => {
    const { friendID } = req.params
    const { name } = req.body

    const findFriend = await Friend.findOne({
        where: {
            id: friendID
        }
    })

    if (name === findFriend.name) {
        findFriend.destroy()
        res.redirect("/addressbook")
    } else {
        // res.render("address-book/delForm", {
        //     ...layout,
        //     locals: {
        //         title: "Delete Confirmation",
        //         friend: findFriend,
        //         errMsg: "Your entry does not match with the friend's name. Please try again."
        //     }
        // })
        req.flash('error', "Your entry does not match with the friend's name. Please try again.")

        // instead of writing the message like this
        // I will need to instead wwrite it like this
        // req.sessions.flash = { error: "Your entry does not match the friend's name" }
        // after doing that I will need to save that and then redirect like this
        // req.session.save(() => {
        //     res.redirect(`/member/todo/${todoID}/delete`)
        // })

        // this will be the difference from when I am using sessions, this is the only part that needs to be changed.
        res.redirect(`/friend/delete/${friendID}`)
    }
}

const addPet = (req, res) => {
    res.render("pet/form", {
        ...layout,
        locals: {
            title: "Add a Pet",
            messages: getFlashMessages(req)
        }
    })
}

const processPetForm = async (req, res) => {
    const { friendID } = req.params
    const { name, age, species } = req.body

    const friend = await Friend.findByPk(friendID)
    friend.createPet({ name, age, species })

    // const newPet = await Pet.create({
    //     name, 
    //     age,
    //     species,
    //     FriendId: friendID
    // })

    res.redirect(`/friend/${friendID}`)
}

module.exports = {
    home,
    listFriends,
    addFriendForm,
    processFriend,
    getFriend,
    editForm,
    processEditForm,
    showDelForm,
    processDelForm,
    addPet,
    processPetForm
}