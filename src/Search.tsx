import { useForm, SubmitHandler } from "react-hook-form"
import { searchGithub } from './tools/requests';
import { Repo } from './type/Repo';
import { useAppDispatch } from './tools/hooks';
import { setSearch } from './reducers/search';

type Response = {
    data: {
    items: Array<Repo>;
  }
}

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
      console.log("submitted", data)
      searchGithub(data).then((x: Response) => dispatch(setSearch(x.data.items))); 
    }
  return (
    <>
      <div>
        <form  onSubmit={handleSubmit(onSubmit)}>
          <input placeholder='Search' {...register("q")} /><input type="submit" />
        </form>
      </div>
    </>
  )
}

export default Search