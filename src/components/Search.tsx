import { useForm, SubmitHandler } from "react-hook-form"
import { createUseStyles } from "react-jss";
import { Sort } from "../tools/requests";
import { useAppDispatch } from "../tools/hooks";
import { useEffect, useState } from "react";
import { getSearch } from "../reducers/search"
import { classNames } from "../tools/classNames";
import { grayBlue, lightGray, lightYellow } from "../style/styles";

const useStyles = createUseStyles({
  input: {
    border: [1, "solid", grayBlue],
    padding: 4,
  },
  numberInput: {
    width: 75,
    border: [1, "solid", grayBlue],
    padding: 4,
  },
  sortContainer: {
    display: "inline",
    outline: [1, "solid", grayBlue],
    fontSize: 12,
    padding: [4, 0, 4 , 3],
    whiteSpace: "nowrap",
  },
  sortButton: {
    border: 0,
    padding: [3, 6],
    borderLeft: [2, "dashed", lightGray],
    "&:first-child": {
      marginLeft: 3,
    }
  },
  activeSort: {
    backgroundColor: lightYellow,
  },
  submitButton: {
    backgroundColor: grayBlue,
    color: "white",
    border: 0,
    padding: 4,
    width: 60,
    outline: [1, "solid", grayBlue],
  }
})

type Inputs = {
    q: string;
    followers: number;
    starGazers: number;
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
