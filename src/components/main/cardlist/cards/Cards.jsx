import './Cards.css'

export default function Cards(props) {

    const { actor } = props;

    return (
        <div className="actor" >
            <div>
                <img src={actor.image} alt={actor.name} className="actor-image" />
            </div>
            <div className='actor-info'>
                <h2>{actor.name}</h2>
                <p>
                    <strong>Anno nascita: </strong>{actor.birth_year}
                    {actor.death_year ? ` — ${actor.death_year}` : ""}
                </p>
                <p><strong>Nazionalità: </strong>{actor.nationality}</p>
                <p className='awards'><strong>Riconoscimenti: </strong>{actor.awards}</p>
                <p className='bio'>{actor.biography}</p>
            </div>
        </div >
    )

}