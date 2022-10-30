import { friends } from "../models/data.model.js";

function postFriend(req, res) {
    if (req.body.name) {
        friends.push({
            id: friends.length + 1,
            name: req.body.name,
        });
        res.status(200).json(friends);
    } else {
        res.status(404).json({
            error: "Route Not Found",
        });
    }
}

function getFriends(req, res) {
    res.status(200).json(friends);
}

function getFriend(req, res) {
    const friendID = Number(req.params.friendID);
    const friend = friends[friendID];

    if (friend) {
        res.status(200).json(friend);
    } else {
        res.status(404).json({
            error: "USER NOT FOUND 404",
        });
    }
}

export { postFriend, getFriends, getFriend };
