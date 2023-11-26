import { createUseStyles } from "react-jss";
import { useAppSelector } from "../tools/hooks";
import { selectSearch } from "../reducers/search";
import Result from "./Result";
import { lightGray } from "../style/styles";

const useStyles = createUseStyles({
    loadingContainer: {
        margin: [18, "auto"]
    },
    searchResultContainer: {
        maxWidth: 1024,
        backgroundColor: lightGray,
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
            {results.value[0].result.map((result, i) =>
                <Result result={result} key={result} odd={i % 2 !== 0} />)}
        </div>
    )
}

export default SearchResults
