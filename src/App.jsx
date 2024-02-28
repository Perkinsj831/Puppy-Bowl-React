import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import SinglePlayer from './components/SinglePlayer'
import AllPlayers from './components/AllPlayers'
import NewPlayerForm from './components/NewPlayerForm'
import NavBar from './components/NavBar'

function App() {

  return (
    <>
    <NavBar />
    <Routes>
        <Route path="/" element={<AllPlayers/>} />
        <Route path="/players/:id" element={<SinglePlayer/>} />
        <Route path="/players/form" element={<NewPlayerForm />} />
    </Routes>
    </>
  )
}

export default App
