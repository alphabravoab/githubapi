import { createUseStyles } from "react-jss";
import { useAppSelector } from "../tools/hooks";
import { selectSearch } from "../reducers/search";
import Result from "./Result";

const useStyles = createUseStyles({
    searchResultContainer: {
        maxWidth: 1024,
        margin: [0, "auto"]
    },
})
function SearchResults() {
    const classes = useStyles();
    const results = useAppSelector(selectSearch)
    if (results.status === "idle") {
        return null
    }
    if (results.status === "loading") {
        return <div>Loading</div>
    }
    return (
        <div className={classes.searchResultContainer}>
            {results.value[0].result.map((result) => <Result result={result} key={result.id} />)}
        </div>
    )
}

export default SearchResults
