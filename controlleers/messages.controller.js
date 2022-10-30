import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

function getMessages(req, res) {
    const fileToSend = path.join(
        __dirname,
        "..",
        "public",
        "images",
        "15.1 skimountain.jpg"
    );
    //res.sendFile(fileToSend);
    res.render("messages", {
        number: "34",
        peter: "Peter Heredia",
    });
}

function postMessages(req, res) {
    console.log("posting message");
}

export { getMessages, postMessages };
