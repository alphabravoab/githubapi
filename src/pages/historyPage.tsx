import Search from "../Search";
import SearchResults from "../components/SearchResults";
import Nav from "../components/nav";


function HistoryPage() {
    return (
        <>
            <Nav />
            Past searches:
            <SearchResults />
        </>
    )
}

export default HistoryPage