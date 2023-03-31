import { Question } from './question';
import { database } from '../../config/database';
export namespace ObjetHelper {
    export const getAllQuestion = (): Array<Question> => {
        return database.prepare('SELECT * FROM question').all();
    }
    export const createQuestion = (titre:String,reponse1:String,reponse2:String,reponse3:String,reponse4:String,reponseVrai:number,qwizzId:number) => {
            database
                .prepare('INSERT INTO Question(titre,reponse1,reponse2,reponse3,reponse4,reponseVrai,qwizzId) VALUES(?,?,?,?,?,?,?,?)')
                .run([titre,reponse1,reponse2,reponse3,reponse4,reponseVrai,qwizzId]);
        }
}