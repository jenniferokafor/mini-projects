import { Routes, Route } from "react-router-dom";
import Homepage from './components/Home.page'
import Superheroes from './components/Superheroes.page'
import RQSuperheroes from './components/RQSuperheroes.page'
import RQSuperhero from "./components/RQSuperhero.page";
import ParallelQueriesPage from "./components/ParallelQueries.page";
import DynamicParallelPage from "./components/DynamicParallel.page";
import DependentQueriesPage from "./components/DependentQueries.page";

export default function Views () {
    return (
        <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='superheroes' element={<Superheroes />} />
            <Route path='rqsuperheroes'>
                <Route index element={<RQSuperheroes />} />
                <Route path=':heroId' element={<RQSuperhero />} />
            </Route>
            <Route path='rqparallel' element={<ParallelQueriesPage />} />
            <Route path='rq-dynamic-parallel' 
                element={<DynamicParallelPage 
                    heroIds={[1,3]}
                />} 
            />
            <Route path='rq-dependent' 
                element={<DependentQueriesPage 
                    email='jen@google.com'
                />} 
            />
        </Routes>
    )
}