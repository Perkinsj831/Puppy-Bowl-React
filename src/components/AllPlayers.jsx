import { useEffect, useState } from "react";
import { deletePlayer, fetchAllPlayers } from "../API/index";
import { useNavigate } from "react-router-dom";

export default function AllPlayers() {
    const navigate = useNavigate()
    const [players, setPlayers] = useState([])
    const [search, setSearch] = useState("")

    fetchAllPlayers()

    useEffect(() => {
        async function updatePlayers() {
            try {
                const players = await fetchAllPlayers()
                setPlayers(players)
            } catch(error) {
                console.error(error)
            }
        }
        updatePlayers()
    }, [])

    async function deletePuppy(playerId) {
        await deletePlayer(playerId)
        const updatedPlayers = await fetchAllPlayers()
        setPlayers(updatedPlayers)
    }

    function searchPuppy(event) {
        setSearch(event.target.value)
    }

    let filteredPlayers = players
    if (search !== "") {
        filteredPlayers = players.filter((player) => {
            const lowerCasePlayerName = player.name.toLowerCase()
            const lowerCaseSearch = search.toLowerCase()
            return lowerCasePlayerName.includes(lowerCaseSearch)
        })
    }

    if(players.length === 0) {
        return <h1 id="load">Loading Players 😀 ...</h1>
    }

    return( 
        <>
            <section id="searchbar">
                <h4 id="searchPlayer">Search Player by Name:</h4>
                <input id="search" value={search} type="text" onChange={searchPuppy}/>
            </section>

        
        <main id="main">
        {
        filteredPlayers.map((player) => {
            return <>
            <article className="player" key={player.id}>
                <h2>{player.name}</h2>
                <h3>{player.breed}</h3>
                <img src={player.imageUrl}/>
            <button id="button1" onClick={() => navigate(`/players/${player.id}`)}>See Details</button>
            <button id="button2" onClick={() => deletePuppy(player.id)}>Delete Player</button>
            </article>
            </>
        })
    }</main>
    </>
    )
}