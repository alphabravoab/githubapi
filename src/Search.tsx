import React, { useState } from 'react'
import { useForm, SubmitHandler } from "react-hook-form"
import { searchGithub } from './tools/requests';
import { Repo } from './type/Repo';
import Result from './components/Result';

type Response = {
    data: {
    items: Array<Repo>;
  }
}

type Inputs = {
    q: string;
  }

function Search() {
    const [data, changeData] = useState<Repo[] | null>(null);
    const {
      register,
      handleSubmit,
    } = useForm<Inputs>();
  
    const onSubmit: SubmitHandler<Inputs> = (data) => {
      searchGithub(data).then((x: Response) => changeData(x.data.items)); 
    }
  return (
    <>
        <div>
        <form  onSubmit={handleSubmit(onSubmit)}>
        <input placeholder='Search' {...register("q")} /><input type="submit" />
        </form>
        </div>
      {data?.map((result: Repo) => <Result result={result} />)}
    </>
  )
}

export default Search