const http = require("http");
const express = require("express");
const app = express();
const PORT = 3340;
const host = "localhost";
const server = http.createServer(app);
const db = require("./templates/db");

const es6Renderer = require("express-es6-template-engine");
app.engine("html", es6Renderer);
app.set("views", "templates");
app.set("view engine", "html");

const path = require("path")

app.use(express.static(path.join(__dirname, "templates")));

app.get("/", (req, res) => {
    res.render("home", {
        partials: {
            footer: "/partials/footer"
        }
    });
});

app.get("/projects", (req, res) => {
    const projectNames = db.map((project) => project.projectName);
    res.render("projects", {
        locals: {
            projectNames,
        },
    });
});

app.get("/projects/:id", (req, res) => {
    const { id } = req.params;
    const project = db.find((p) => p.projectName === id);

    if (project) {
        res.render("project-details", {
            locals: {
                projectName: project.projectName,
                projectDescription: project.projectDescription,
            },
        });
    }
});

server.listen(PORT, host, () => console.log(`${host}://${PORT} is ready`));
