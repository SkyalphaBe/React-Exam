import React from "react";

type Question = {
    nom: String,
    reponse1: String,
    reponse2: String,
    reponse3: String,
    reponse4: String,
    reponseCorrect: number
    qwizId: number
}
type Qwiz = {
    nom: String,
}
const fetchData = (url: RequestInfo | URL) => fetch(url).then(res => res.json());
const apiUrl : string = "http://localhost:8080/api/question";
function Creer() {

    const[theme,setTheme] = React.useState<String>("");
    const[question,setQuestion] = React.useState<string>("");
    const[reponse1,setReponse1] = React.useState<String>("");
    const[reponse2,setReponse2] = React.useState<String>("");
    const[reponse3,setReponse3] = React.useState<String>("");
    const[reponse4,setReponse4] = React.useState<String>("");
    const[reponseCorrect,setReponseCorrect] = React.useState<number>(0);
    const[idQwizz,setIdQwizz] = React.useState<number>(0);


    function handleChangeTheme(event: React.ChangeEvent<HTMLInputElement>) {
        setTheme(event.target.value);
    }
    function handleChangeQuestion(event: React.ChangeEvent<HTMLInputElement>) {
        setQuestion(event.target.value);
    }
    function handleChangeReponse1(event: React.ChangeEvent<HTMLInputElement>) {
        setReponse1(event.target.value);
    }
    function handleChangeReponse2(event: React.ChangeEvent<HTMLInputElement>) {
        setReponse2(event.target.value);
    }
    function handleChangeReponse3(event: React.ChangeEvent<HTMLInputElement>) {
        setReponse3(event.target.value);
    }
    function handleChangeReponse4(event: React.ChangeEvent<HTMLInputElement>) {
        setReponse4(event.target.value);
    }

    async function addQwizz():Promise<void>{
        const qwizPost : Qwiz = {
            nom: theme
        }
        console.log(qwizPost)
        const rawReponse:Response = await fetch("http://localhost:8080/api/qwizz/create",{
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(qwizPost)
        });
        const content:void = await rawReponse.json()
            .then((data):void => {
                setIdQwizz(data.id)
            })
        console.log(content);

    }
    async function addQuestion(id:number):Promise<void> {
        const questionPost : Question = {
            nom: question,
            reponse1: reponse1,
            reponse2: reponse2,
            reponse3: reponse3,
            reponse4: reponse4,
            reponseCorrect: reponseCorrect,
            qwizId: id
        }
        const rawReponse:Response = await fetch("http://localhost:8080/api/question/create",{
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(questionPost)
        });
        const content = await rawReponse.json();
    }

  return (
      <div className={"d-flex justify-content-center align-items-center flex-column w-100 text-white"}>
            <h1 className={"bg-primary rounded p-1"}>Créer un Quiz</h1>
            <div className={"w-50 bg-primary p-4 text-white rounded"}>
                <div className={"w-100 d-flex justify-content-sm-between"}>
                    <label htmlFor="">Thème</label>
                    <input className={"w-75 rounded border-0 m-1"} onChange={handleChangeTheme} type="text"/>
                    <button className={"btn btn-secondary"} onClick={addQwizz}>Ajouter</button>
                </div>

                <div className={"w-100 d-flex justify-content-sm-between"}>
                    <label htmlFor="">nouvelle question</label>
                    <input className={"w-75 rounded border-0"} onChange={handleChangeQuestion} type="text"/>
                </div>

                <div className={"reponse"}>
                    <div className={"d-flex justify-content-sm-around align-items-center w-75 m-2"}>
                        <label htmlFor="">1-</label>
                        <input className={"rounded border-0"} onChange={handleChangeReponse1} type="text"/>
                        <button className={"btn btn-secondary"} onClick={()=>setReponseCorrect(1)}>choix</button>
                    </div>
                    <div className={"d-flex justify-content-sm-around align-items-center w-75 m-2"}>
                        <label htmlFor="">2-</label>
                        <input className={"rounded border-0"} onChange={handleChangeReponse2} type="text"/>
                        <button className={"btn btn-secondary"} onClick={()=>setReponseCorrect(2)}>choix</button>
                    </div>
                    <div className={"d-flex justify-content-sm-around align-items-center w-75 m-2"}>
                        <label htmlFor="">3-</label>
                        <input className={"rounded border-0"} onChange={handleChangeReponse3} type="text"/>
                        <button className={"btn btn-secondary"} onClick={()=>setReponseCorrect(3)}>choix</button>
                    </div>
                    <div className={"d-flex justify-content-sm-around align-items-center w-75 m-2"}>
                        <label htmlFor="">4-</label>
                        <input className={"rounded border-0"} onChange={handleChangeReponse4} type="text"/>
                        <button className={"btn btn-secondary"} onClick={()=>setReponseCorrect(4)}>choix</button>
                    </div>
                    <button className={"btn btn-secondary"} onClick={()=>addQuestion(idQwizz)}>ok</button>
                </div>

                <div className={"questionQwiz"}>
                    <h1>Question du Quiz</h1>
                </div>
                <button className={"btn btn-success"}>Valider</button>
            </div>
      </div>
  );
}

export default Creer;