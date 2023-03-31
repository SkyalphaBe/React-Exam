import { Question } from '../models/question/question';
import { ObjetHelper } from '../models/question/helper';

export namespace ObjetService {
    export const getAllObjets = (): Array<Question> => {
        return ObjetHelper.getAllQuestion();
    }
    export const createObjet = (titre:String,reponse1:String,reponse2:String,reponse3:String,reponse4:String,reponseVrai:number,qwizzId:number): void => {
        ObjetHelper.createQuestion(titre,reponse1,reponse2,reponse3,reponse4,reponseVrai,qwizzId);
    }
}