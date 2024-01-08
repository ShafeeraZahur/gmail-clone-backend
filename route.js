import express from "express";
import { saveSendEmails ,getMails, moveMailsToBin , toggleStarredMail, deleteMails } from "./Controller/emailController.js";

const routes = express.Router();

routes.post('/save', saveSendEmails);
routes.get('/mails/:type', getMails);
routes.post('/save-draft', saveSendEmails);
routes.post('/bin', moveMailsToBin);
routes.post('/starred', toggleStarredMail);
routes.delete('/delete', deleteMails);

export default routes;