import { createUseStyles } from "react-jss";
import { Repo } from "../type/Repo";

const useStyles = createUseStyles({
    container: {
        display: "flex",
        border: "2px solid white",
        maxWidth: 1024,
        borderRadius: 6,
        padding: 18,
        marginBottom: 12,
    },
    textContainer: {
        textAlign: "left",
    },
    title: {
        fontWeight: 600,
        fontSize: 20,
    },

})
type RenderProps = {
    result: Repo
}

function Result({result}: RenderProps) {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <div className={classes.textContainer}>
                <div className={classes.title}> name: {result.name}</div>
                <div>{result.description}</div>
            </div>
        </div>
    )
}

export default Result
