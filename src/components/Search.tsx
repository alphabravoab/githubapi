import { useForm, SubmitHandler } from "react-hook-form"
import { Sort, searchGithub } from "../tools/requests";
import { useAppDispatch } from "../tools/hooks";
import { setSearch } from "../reducers/search";
import { addToSearchHistory } from "../reducers/searchHistory";
import { useEffect, useState } from "react";
import { json } from "react-router-dom";

type Inputs = {
    q: string;
    followers: string;
    starGazers: string;
    language: string;
  }

function Search() {
  const dispatch = useAppDispatch();
  const [sort, changeSort] = useState<Sort>("updated")
  const {
    register,
    getValues,
    handleSubmit,
  } = useForm<Inputs>();

  useEffect(() => {
    const data = getValues()
    const transformedRequest = {
      q: encodeURI(data.q),
      sort
    }
    if(data.q) {
      searchGithub(transformedRequest).then((resp) => {
        dispatch(setSearch(resp.data.items))
        dispatch(addToSearchHistory({
          search: data.q,
          results: resp.data.items.slice(1,9)
        }))
      });
    }
  }, [sort])
  
  const onSubmit: SubmitHandler<Inputs> = ({q, ...data}) => {
    const transformedRequest = {
      q: `${q}+${new URLSearchParams(data).toString()}`,
      sort
    }
    console.log("tesitng q", transformedRequest, data)
    searchGithub(transformedRequest).then((resp) => {
      dispatch(setSearch(resp.data.items))
      dispatch(addToSearchHistory({
        search: data.q,
        results: resp.data.items.slice(1,9)
      }))
    }); 
  }

  return (
    <>
      <div>
        <form  onSubmit={handleSubmit(onSubmit)}>
          <input placeholder="Basic search" {...register("q")} />
          <input placeholder="programming language e.g. python" {...register("language")} />
          <input placeholder="stars" type="number" {...register("starGazers")} />
          <input placeholder="followers" type="number" {...register("followers")} />
          <input type="submit" />
          <button onClick={() => changeSort("stars")}>Stars</button>
          <button onClick={() => changeSort("forks")}>Forks</button>
          <button onClick={() => changeSort("updated")}>Updated</button>
        </form>
      </div>
    </>
  )
}

export default Search