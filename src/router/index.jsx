import { createBrowserRouter } from "react-router-dom"
import Home from "../pages/Home/Home"
import Root from "../layouts/mainLayout"
import About from "../pages/About/About"
import NotFound from "../pages/NotFound/NotFound"
import Pokedex from "../pages/Pokedex/Pokedex"
import PokemonInfo from "../pages/PokemonInfo/PokemonInfo"
const router = createBrowserRouter([
    {
        path: '',
        element: <Root />,
        errorElement: <NotFound />,
        children: [
            {
                path: '',
                element: <Home />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/pokedex',
                element: <Pokedex />
            },
            {
                path: '/pokedex/:pokemonName',
                element: <PokemonInfo />
            }
        ]
    }
])


export default router