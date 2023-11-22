import { createUseStyles } from "react-jss";
import { useAppSelector } from "../tools/hooks";
import { selectSearch } from "../reducers/search";
import Result from "./Result";

const useStyles = createUseStyles({
    loadingContainer: {
        margin: [18, "auto"]
    },
    searchResultContainer: {
        maxWidth: 1024,
        backgroundColor: "#D1D2D4",
        borderRadius: 6,
        margin: [18, "auto"]
    },
})
function SearchResults() {
    const classes = useStyles();
    const results = useAppSelector(selectSearch)
    if (results.status === "idle") {
        return null
    }
    if (results.status === "loading") {
        return <div className={classes.loadingContainer}>Loading</div>
    }
    return (
        <div className={classes.searchResultContainer}>
            {results.value[0].result.map((result, i) => <Result result={result} key={result.id} odd={i % 2 !== 0} />)}
        </div>
    )
}

export default SearchResults
