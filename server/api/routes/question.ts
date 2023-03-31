import {query, Request, Response} from 'express';
import {ObjetService} from "../services/qwizz";

const route = require('express').Router();

route.get('/',
    (req: Request, res: Response) => {
        const objets = ObjetService.getAllObjets();
        res.send(objets);
    });
route.post('/create'
    ,
    (req: Request, res: Response) => {
        // @ts-ignore
        const {titre:String,reponse1:String,reponse2:String,reponse3:String,reponse4:String,reponseVrai:number,qwizzId:number} = req.body;
        // @ts-ignore
        ObjetService.createObjet(titre,reponse1,reponse2,reponse3,reponse4,reponseVrai,qwizzId);
        res.sendStatus(201);
    })
export default route;