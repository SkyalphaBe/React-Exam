import { Question } from './question';
import { database } from '../../config/database';
export namespace ObjetHelper {
    export const getAllQuestion = (): Array<Question> => {
        return database.prepare('SELECT * FROM Objet').all();
    }
    export const createQuestion =
        (): void => {
            database
                .prepare('INSERT INTO Objet() VALUES()')
                .run([]);
        }
}