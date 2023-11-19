import { useForm, SubmitHandler } from "react-hook-form"
import { searchGithub } from "./tools/requests";
import { useAppDispatch } from "./tools/hooks";
import { setSearch } from "./reducers/search";
import { addToSearchHistory } from "./reducers/searchHistory";

type Inputs = {
    q: string;
  }

function Search() {
    const dispatch = useAppDispatch()
    const {
      register,
      handleSubmit,
    } = useForm<Inputs>();
  
    const onSubmit: SubmitHandler<Inputs> = (data) => {
      const transformedRequest = {
        q: encodeURI(data.q)
      }
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
          <input placeholder="Search" {...register("q")} /><input type="submit" />
        </form>
      </div>
    </>
  )
}

export default Search