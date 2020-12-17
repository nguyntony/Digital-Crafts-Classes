const { layout } = require("../utils");
const { DinnerIdea } = require("../models");

const list = async (req, res) => {
    const { id } = req.session.user;
    if (id) {
        const ideas = await DinnerIdea.findAll({
            where: {
                uid: id
            }
        })
        res.render("list", {
            locals: {
                ideas,
                title: "List of Dinner Ideas",
            },
            ...layout,
        });
    } else {
        res.redirect("/")
    }
};

const newIdea = (req, res) => {
    res.render("idea-form", {
        locals: {
            title: "Create a New Idea",
        },
        ...layout,
    });
};

const processIdea = async (req, res) => {
    const { name, ingredients, recipe } = req.body;
    const { id } = req.session.user;
    console.log(id)

    if (name && id) {
        const idea = await DinnerIdea.create({
            name,
            ingredients,
            recipe,
            uid: id,
        });
        console.log(idea);
        res.redirect(`${req.baseUrl}/dinner-ideas`);
    } else {
        res.redirect(`/members-only/dinner-ideas/new`);
    }
};

module.exports = {
    list,
    newIdea,
    processIdea,
};
