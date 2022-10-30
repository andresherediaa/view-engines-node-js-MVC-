import express from "express";
import { getMessages, postMessages } from "../controlleers/messages.controller.js";
const messagesRouter = express.Router();

messagesRouter.get("/", getMessages);
messagesRouter.post("/:mesageID", postMessages);

export { messagesRouter };
