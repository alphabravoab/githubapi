import Search from "../Search";
import SearchResults from "../components/CurrentSearch";
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