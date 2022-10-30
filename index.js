import express from "express";
import { friendsRoute } from "./routes/friends.routes.js";
import { messagesRouter } from "./routes/messages.router.js";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express();

//ENGINES
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));

app.use((req, res, next) => {
    const start = Date.now();
    next();
    const end = Date.now() - start;
});
//serving static files
app.use("/site", express.static(path.join(__dirname, "public")));
//JSON
app.use(express.json());

//render view
app.get('/', (req, res)=> {
    res.render('index', {
        title: "Mi primera View",
        french: 'Est es una foto de Francia'
    })
})

//Routes
app.use("/friends", friendsRoute);
app.use("/messages", messagesRouter);

app.listen("3001", () => console.log("Listen in port 30001"));
