import React from "react";
import { useAppSelector } from "../tools/hooks";
import { selectSearch } from "../reducers/search";
import Result from "./Result";
import { Repo } from "../type/Repo";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
    searchResultContainer: {
        maxWidth: 1024,
        margin: [0, "auto"]
    },
})
function SearchResults() {
    const classes = useStyles();
    const results: Array<Repo> = useAppSelector(selectSearch)
    return (
        <div className={classes.searchResultContainer}>
            {results.map((result) => <Result result={result} key={result.id} />)}
        </div>
    )
}

export default SearchResults