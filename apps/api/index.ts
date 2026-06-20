import express from "express";
import { addUserSchema, type GetUser } from "types";

const app = express();

app.use(express.json())

app.post("/", (req, res) => {
    const parseData = addUserSchema.safeParse(req.body);
    if (!parseData.success) {
        return res.status(411).json({ error: "Invalid input" })
    }
    console.log(parseData.data)

    const data: GetUser = {
        email: parseData.data.email
    }

    res.json({
        message: "User added successfully",
        data
    })
})


app.listen(3000)