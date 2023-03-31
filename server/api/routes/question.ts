import { Request, Response } from 'express';
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
        const {} = req.body;
        ObjetService.createObjet();
        res.sendStatus(201);
    })
export default route;