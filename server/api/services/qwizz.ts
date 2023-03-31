import { Qwizz } from '../models/qwizz/qwizz';
import { ObjetHelper } from '../models/qwizz/helper';

export namespace ObjetService {
    export const getAllObjets = (): Array<Qwizz> => {
        return ObjetHelper.getAllQwizz();
    }
    export const createObjet = (): void => {
        //ObjetHelper.createObjet();
    }
}