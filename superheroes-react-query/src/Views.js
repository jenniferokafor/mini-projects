import { Routes, Route } from "react-router-dom";
import Homepage from './components/Home.page'
import Superheroes from './components/Superheroes.page'
import RQSuperheroes from './components/RQSuperheroes.page'
import RQSuperhero from "./components/RQSuperhero.page";

export default function Views () {
    return (
        <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='superheroes' element={<Superheroes />} />
            <Route path='rqsuperheroes'>
                <Route index element={<RQSuperheroes />} />
                <Route path=':heroId' element={<RQSuperhero />} />
            </Route>
        </Routes>
    )
}