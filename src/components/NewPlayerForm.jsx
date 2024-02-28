import { useState } from "react"
import { addPlayer } from "../API"
import { useNavigate } from "react-router-dom"


export default function NewPlayerForm () {
    const navigate = useNavigate()

    const [name, setName] = useState("")
    const [breed, setBreed] = useState("")
    const [imageUrl, setImageUrl] = useState("")

    async function handleSubmit(event) {
        event.preventDefault()

        const payload = {
                name: name,
                breed: breed,
                imageUrl: imageUrl
        }

        try {

            await addPlayer(payload)

            navigate("/")

        } catch(error) {
            console.error(error)
        }
    }
    
    return (
        <div id="puppyForm">
            <form onSubmit={handleSubmit}>
                <h1 id="formH1">Add Your Player Below</h1>
                <label className="label">
                    Puppy Name:
                    <input className="input" value={name} onChange={(event) => setName(event.target.value)}/>
                </label>
                <label className="label">
                    Puppy Breed:
                    <input className="input" value={breed} onChange={(event) => setBreed(event.target.value)}/>
                </label>
                <label className="imglabel">
                    Puppy Image Url:
                    <input className="input" value={imageUrl} onChange={(event) => setImageUrl(event.target.value)}/>
                </label>
                <button id="addPlayerButton" type="submit">Add Player</button>
            </form>
        </div>
    )
}