import { useState } from "react";

import Result from "./Result";
import { Repo } from "../type/Repo";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
    searchResultContainer: {
        maxWidth: 1024,
        margin: [18, "auto"],
        border: [2, "solid", "white"],
        padding: 18
    },
    button: {
        width: 200,
        background: "transparent",
        border: "none",
        padding: [6,18]
    }
})

type RenderProps = {
    search: string,
    results: Array<Repo>
}
function SearchResults({ search, results}: RenderProps) {
    const classes = useStyles();
    const [show, changeShow] = useState(false)
    return (
        <div className={classes.searchResultContainer} onClick={() => changeShow(!show)}>
            <div className={classes.button}>
                Searching for: {search}
            </div>
            {show && results.map((result) => <Result result={result} key={result.id} />)}
        </div>
    )
}

export default SearchResults
