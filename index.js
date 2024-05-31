import express from "express";
import connectToDb from "./Database/dbConnection.js";
import cors from "cors";
import routes from "./route.js";

const app=express();

await connectToDb();

app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use("/",routes);

const port = 3000;

app.listen(port, () => {
});