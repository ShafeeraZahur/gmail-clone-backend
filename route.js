import express from "express";
import { saveSendEmails ,getMails, moveMailsToBin , toggleStarredMail, deleteMails } from "./Controller/emailController.js";
import signupRouter from "./Auth/Signup.js";
import loginRouter from "./Auth/Login.js";
import logoutRouter from "./Auth/Logout.js";

const routes = express.Router();
routes.post('/signup', signupRouter);
routes.post('/login', loginRouter);
routes.post("/logout",logoutRouter);
routes.post('/save', saveSendEmails);
routes.get('/mails/:type', getMails);
routes.post('/save-draft', saveSendEmails);
routes.post('/bin', moveMailsToBin);
routes.post('/starred', toggleStarredMail);
routes.delete('/delete', deleteMails);

export default routes;