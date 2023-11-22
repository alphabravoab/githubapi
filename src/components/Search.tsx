import { useForm, SubmitHandler } from "react-hook-form"
import { Sort } from "../tools/requests";
import { useAppDispatch } from "../tools/hooks";
import { useEffect, useState } from "react";
import { getSearch } from "../reducers/search"
import {createUseStyles} from "react-jss";
import {classNames} from "../tools/classNames";

const useStyles = createUseStyles({
  input: {
    border: [1, "solid", "#2a2334"],
  },
  numberInput: {
    width: 60,
    border: [1, "solid", "#2a2334"],
  },
  sortContainer: {
    display: "inline",
    border: [1, "solid", "#2a2334"],
    fontSize: 12,
    padding: [1, 0, 1 , 3],
    whiteSpace: "nowrap",
  },
  sortButton: {
    border: 0,
  },
  activeSort: {
    backgroundColor: "#FBE134",
    background: "#f2f157",
  },
  submitButton: {
    backgroundColor: "#2a2E34",
    color: "white",
    border: 0,
    padding: 2,
    width: 60
  }
})

type Inputs = {
    q: string;
    followers: string;
    starGazers: string; // backend sees them as strings so instead of casting there I set them correct here
    language: string;
}

function Search() {
  const dispatch = useAppDispatch();
  const classes = useStyles();
  const [sort, changeSort] = useState<Sort>("updated");
  const {
    register,
    getValues,
    handleSubmit,
  } = useForm<Inputs>();

  useEffect(() => {
    const data = getValues()
    let qstring = data.q;
    if(data.language) {
      qstring = qstring + `+language=${data.language}`
    }
    if(data.starGazers) {
      qstring = qstring + `+starGazers=${data.starGazers}`
    }
    if (data.followers) {
      qstring = qstring + `+followers=${data.followers}`
    }
    const transformedRequest = {
      q: qstring,
      sort
    };
    if(data.q) {
      dispatch(getSearch(transformedRequest));
    }
  }, [sort, dispatch, getValues])

  const onSubmit: SubmitHandler<Inputs> = ({q, ...data}) => {
    let qstring = q;
    if(data.language) {
      qstring = qstring + `+language=${data.language}`
    }
    if(data.starGazers) {
      qstring = qstring + `+starGazers=${data.starGazers}`
    }
    if (data.followers) {
      qstring = qstring + `+followers=${data.followers}`
    }
    const transformedRequest = {
      q: qstring,
      sort
    }
    dispatch(getSearch(transformedRequest));
  }

  return (
    <>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input className={classes.input} placeholder="Basic search" {...register("q")} />
          <input className={classes.input} placeholder="Language e.g. python" {...register("language")} />
          <input className={classes.numberInput} placeholder="Stars" type="number" {...register("starGazers")} />
          <input className={classes.numberInput} placeholder="Followers" type="number" {...register("followers")} />
          <div className={classes.sortContainer}>
            Sort by
            <button
                className={classNames({[classes.sortButton]: true, [classes.activeSort]: sort === "stars"})}
                onClick={() => changeSort("stars")}
            >
              Stars
            </button>
            <button
                className={classNames({[classes.sortButton]: true, [classes.activeSort]: sort === "forks"})}
                onClick={() => changeSort("forks")}
            >
              Forks
            </button>
            <button
                className={classNames({[classes.sortButton]: true, [classes.activeSort]: sort === "updated"})}
                onClick={() => changeSort("updated")}
            >
              Updated
            </button>
          </div>
          <button className={classes.submitButton} type="submit">Search</button>
        </form>
      </div>
    </>
  )
}

export default Search
