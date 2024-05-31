import express from "express";

const logoutRouter = express.Router();

// API for logging out the user
logoutRouter.post("/logout", async (req, res) => {
    try {
        
        res.send({ msg: "Logout successful", code: 1 });
    } catch (err) {
        res.status(500).send({ msg: "Error occurred while logging out", code: 0 });
    }
});

export default logoutRouter;
