import SearchResults from "../components/SearchResults ";
import Nav from "../components/nav";
import { getHistorySearches } from "../reducers/searchHistory";
import { useAppSelector } from "../tools/hooks";


function HistoryPage() {
    const searches = useAppSelector(getHistorySearches)
    console.log("search", searches)
    return (
        <>
            <Nav />
            Past searches:
            {searches.map(search => <SearchResults {...search} />)}
            {/* <SearchResults /> */}
        </>
    )
}

export default HistoryPage