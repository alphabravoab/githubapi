import SearchResults from "../components/SearchResults ";
import Nav from "../components/nav";
import { selectSearch} from "../reducers/search";
import { useAppSelector } from "../tools/hooks";


function HistoryPage() {
    const searches = useAppSelector(selectSearch)
    return (
        <>
            <Nav />
            Past searches:
            {searches.value.map(search => <SearchResults key={search.history.q} search={search.history.q} results={search.result} />)}
        </>
    )
}

export default HistoryPage
