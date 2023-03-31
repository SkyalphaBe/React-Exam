import { Question } from '../models/question/question';
import { ObjetHelper } from '../models/question/helper';

export namespace ObjetService {
    export const getAllObjets = (): Array<Question> => {
        return ObjetHelper.getAllQuestion();
    }
    export const createObjet = (): void => {
        //ObjetHelper.createQuestion();
    }
}