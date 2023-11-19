import SearchResults from "../components/SearchResults ";
import Nav from "../components/nav";
import { getHistorySearches } from "../reducers/searchHistory";
import { useAppSelector } from "../tools/hooks";


function HistoryPage() {
    const searches = useAppSelector(getHistorySearches)
    return (
        <>
            <Nav />
            Past searches:
            {searches.map(search => <SearchResults {...search} />)}
        </>
    )
}

export default HistoryPage