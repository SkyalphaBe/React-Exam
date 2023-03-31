import SQLiteDatabase, { Database } from 'better-sqlite3'

let database: Database
const connection = (): Promise<void> => {
    return new Promise((resolve) => {
        database = new SQLiteDatabase('data.db')
        loadDatabase(database)
        return resolve()
    })
}

const loadDatabase = (db: Database): void => {
    db.exec(`
        CREATE TABLE IF NOT EXISTS qwizz
        (
            qwizzId INTEGER PRIMARY KEY AUTOINCREMENT,
            nom VARCHAR2 NOT NULL,
            nb_questions INTEGER NOT NULL
        );

        CREATE TABLE IF NOT EXISTS question
        (
            questionId INTEGER PRIMARY KEY AUTOINCREMENT,
            title VARCHAR2 NOT NULL,
            content VARCHAR2 NOT NULL,
            reponse1 VARCHAR2 NOT NULL,
            reponse2 VARCHAR2 NOT NULL,
            reponse3 VARCHAR2 NOT NULL,
            reponse4 VARCHAR2 NOT NULL,
            reponseVrai integer NOT NULL,
            qwizzId INTEGER NOT NULL,
            FOREIGN KEY (qwizzId) REFERENCES qwizz(qwizzId)
        );

    `);

}
export { connection, database }