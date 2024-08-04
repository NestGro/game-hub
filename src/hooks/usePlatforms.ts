import useData from "./useData";

interface Platform {
    id: number;
    name: string;
    slug: string;
}
 //this is calling the RAWG database to get a list of all parent platforms 
const usePlatforms = () => useData<Platform>('/platforms/lists/parents');

export default usePlatforms;