import React, {useEffect} from "react";
import Qwiz from "../../Components/Qwiz/Qwiz";

const fetchData = (url: RequestInfo | URL) => fetch(url).then(res => res.json());
const apiUrl : string = "http://localhost:8080/api/qwizz";

type qwizz = {
    nom: string,
    nbQuestion: number,
}


function Jouer() {
    const [qwizz, setQwizz] = React.useState<Array<qwizz>>([]);
    const getQwizz = () => {
        return fetchData(`${apiUrl}`)
    }
    useEffect(():void => {
        getQwizz().then((res): void => {
            setQwizz(res)
        })
    }, [])
    console.log(qwizz)

    return(
        <div className={"d-flex justify-content-center align-items-center flex-column w-100 text-white"}>
            <h1 className={"bg-primary rounded p-1 text-bg-"}>Choix du Quiz</h1>
            <div className={"jouerContent w-75"}>
                {qwizz.map((value: qwizz) => <Qwiz titre={value.nom} nbQuestion={value.nbQuestion}/>)}
            </div>
            <div className={"d-flex justify-content-between text-primary align-items-center w-50"}>
                <div className={"d-flex align-items-center justify-content-evenly w-50"}>
                    <label htmlFor="">Nom</label>
                    <input type="text"/>
                </div>
                <button className={"btn btn-primary"}>Jouer!</button>
            </div>
        </div>
    );
}

export default Jouer;