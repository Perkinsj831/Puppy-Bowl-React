import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getSingleplayer } from "../API"

export default function SinglePlayer() {

    const { id } = useParams()
    const [player, setPlayer] = useState(null)

    useEffect(() => {
        async function updatePlayer() {
            try {

                const player = await getSingleplayer(id)
                setPlayer(player)

            } catch(error) {
                console.error(error)
            }
        }
        updatePlayer()
    }, [])

    if (!player) {
        return <h1>Loading Player {id}...</h1>
    }

    return (
        <div className="singlePlayerView">
            <article className="playerSingle" key={player.id}>
                    <h2>{player.name}</h2>
                    <h3>{player.breed}</h3>
                    <img src={player.imageUrl}/>
            </article>
        </div>
    )
}