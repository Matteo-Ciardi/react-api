export default function Cards(props) {

    const {actor} = props;

    return (
        <div className="actor" >
            <div className="actor-image">
                <img src={actor.image} alt={actor.name} />
            </div>
            <div>
                <h2>{actor.name}</h2>
                <p>
                    Anno nascita: {actor.birth_year}
                    {actor.death_year ? ` — ${actor.death_year}` : ""}
                </p>
                <p>Nazionalità: {actor.nationality}</p>
                <p>Riconoscimenti: {actor.awards}</p>
                <p>{actor.biography}</p>
            </div>
        </div>
    )

}