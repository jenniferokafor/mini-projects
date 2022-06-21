import { useQuery } from "react-query";
import axios from "axios";

export const fetchSuperHero = (heroId) => {
    return axios.get(`http://localhost:4000/superheroes/${heroId}`)
}

const useSuperHeroData = (heroId) => {

    return useQuery(
        ['super-hero', heroId],
        () => fetchSuperHero(heroId),
    )
}

export default useSuperHeroData
