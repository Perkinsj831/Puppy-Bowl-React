import { NavLink } from "react-router-dom"

export default function NavBar() {
    return( 
        <header>
            <section>
                <h1 id="header">2024 Puppy BowlBowl🏆</h1>
            </section>

            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/players/form">Add Player Form</NavLink>
            </nav>
        </header>
    )
}