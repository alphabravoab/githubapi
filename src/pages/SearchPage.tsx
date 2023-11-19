import Search from "../Search";
import SearchResults from "../components/SearchResults";
import Nav from "../components/nav";


function SearchPage() {
    return (
        <>
            <Nav />
            <Search />
            <SearchResults />
        </>
    )
}

export default SearchPage