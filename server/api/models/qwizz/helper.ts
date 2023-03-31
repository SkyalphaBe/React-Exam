import { Qwizz } from './qwizz';
import { database } from '../../config/database';
import qwizz from "../../routes/qwizz";
export namespace ObjetHelper {
    export const getAllQwizz = (): Array<Qwizz> => {
        return database.prepare('SELECT * FROM qwizz').all();
    }
    export const createObjet =(nom:String) => {
           return  database
                .prepare('INSERT INTO qwizz(nom) VALUES(?)')
                .run([nom]);
        }
}