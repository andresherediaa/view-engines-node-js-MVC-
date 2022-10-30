import express from "express";
import {
    getFriend,
    getFriends,
    postFriend,
} from "../controlleers/firends.controller.js";

const friendsRoute = express.Router();

friendsRoute.use((req, res, next) => {
    next();
});

friendsRoute.post("/", postFriend);
friendsRoute.get("/", getFriends);
friendsRoute.get("/:friendID", getFriend);

export { friendsRoute };
