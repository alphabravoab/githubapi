import { useState } from "react";
import { createUseStyles } from "react-jss";
import Result from "./Result";
import { lightGray } from "../style/styles";

const useStyles = createUseStyles({
    searchResultContainer: {
        maxWidth: 1024,
        margin: [18, "auto"],
        border: [2, "solid", "white"],
        padding: 18,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        "@media(min-width : 1100px)": {
            width: 1024,
        },
    },
    button: {
        width: 200,
        background: "transparent",
        border: "none",
        padding: [6,18]
    },
    historyResult: {
        backgroundColor: lightGray,
        borderRadius: 6,
        margin: [18, "auto"]
    },
})

type RenderProps = {
    search: string,
    results: number[],
}
function SearchResults({ search, results}: RenderProps) {
    const classes = useStyles();
    const [show, changeShow] = useState(false)
    return (
        <div className={classes.searchResultContainer} onClick={() => changeShow(!show)}>
            <div className={classes.button}>
                Searching for: {search}
            </div>
            {show && <div className={classes.historyResult}>
                {results.slice(0, 10).map((result, id) => <Result result={result} key={result} odd={id % 2 === 0} />)}
            </div>}
        </div>
    )
}

export default SearchResults
