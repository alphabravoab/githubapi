import React from "react";
import { useAppSelector } from "../tools/hooks";
import { selectSearch } from "../reducers/search";
import Result from "./Result";
import { Repo } from "../type/Repo";

function SearchResults() {
    const results: Array<Repo> = useAppSelector(selectSearch)
    return (
        <>
            {results.map((result: Repo) => <Result result={result} key={result.id} />)}
        </>
    )
}

export default SearchResults