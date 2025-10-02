import { useState, useEffect } from "react"
import Cards from "./cards/Cards"
import './CardList.css'

export default function CardList() {
    const [actors, setActors] = useState([]);

    function fetchActors() {
        axios.get("https://lanciweb.github.io/demo/api/actresses/")
            .then((result) => setActors(result.data))
            .catch(error => console.log(error)
            )
    }

    useEffect(() => {
        fetchActors()
    }
        , [])

    return (
        <div className="container">
            <h1>Actress - Wiki</h1>
            <div className="actors">
                {actors.map((actor) => (
                    <Cards
                        key={actor.id}
                        actor={actor}
                    />
                ))}
            </div>
        </div>
    )
}