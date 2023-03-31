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
    console.log(req.body);
        const {nom} = req.body;
        const id = ObjetService.createObjet(nom);
        res.send(id.lastInsertRowid)
    })
export default route;