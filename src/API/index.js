import axios from "axios"

const BASE_URL = "https://fsa-puppy-bowl.herokuapp.com/api/johnperkins5/players"

export const fetchAllPlayers = async () => {
    const { data } = await axios.get(BASE_URL)
    return data.data.players
}

export const getSingleplayer = async (playerId) => {
    const { data } = await axios.get(BASE_URL + "/" + playerId)
    return data.data.player
}

export const addPlayer = async(player) => {
    await axios.post(BASE_URL, player)
}

export const deletePlayer = async(playerId) => {
    await axios.delete(BASE_URL + "/" + playerId)
}