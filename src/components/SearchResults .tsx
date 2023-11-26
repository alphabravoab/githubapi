import { useState } from "react";
import { createUseStyles } from "react-jss";
import Result from "./Result";
import { lightGray, mobileDevices, spacingMedium, spacingSmall } from "../style/styles";

const useStyles = createUseStyles({
    searchResultContainer: {
        maxWidth: 1024,
        margin: [spacingMedium, "auto"],
        border: [2, "solid", "white"],
        padding: spacingMedium,
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
        padding: [spacingSmall,spacingMedium]
    },
    historyResult: {
        backgroundColor: lightGray,
        maxWidth: `calc(100vw - ${spacingMedium * 4}px)`,
        borderRadius: 6,
        margin: [spacingMedium, "auto"],
        [`@media(max-width : ${mobileDevices}px)`]: {
            maxWidth: `calc(100vw - ${spacingMedium * 4}px)`,
        }
    },
})

type RenderProps = {
    search: string,
    results: number[],
}
function SearchResults({ search, results}: RenderProps) {
    const classes = useStyles();
    const [show, changeShow] = useState<boolean>(false)
    return (
        <div className={classes.searchResultContainer} onClick={() => changeShow(!show)}>
            <div className={classes.button}>
                {search}
            </div>
            {show && <div className={classes.historyResult}>
                {results.slice(0, 10).map((result, id) => <Result result={result} key={result} odd={id % 2 === 0} />)}
            </div>}
        </div>
    )
}

export default SearchResults
