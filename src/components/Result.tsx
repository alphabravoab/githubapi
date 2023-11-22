import { createUseStyles } from "react-jss";
import { Repo } from "../type/Repo";
import { classNames } from "../tools/classNames";
import { grayBlue } from "../style/styles";

const useStyles = createUseStyles({
    container: {
        display: "flex",
        flexWrap: "wrap",
        gap: 6,
        alignItems: "baseline",
        marginBottom: 12,
        fontSize: 16,
        padding: [9, 18]
    },
    textContainer: {
        textAlign: "left",
    },
    title: {
        fontWeight: 600,
        flexShrink: 0,
    },
    description: {
        flexBasis: "100%",
        textAlign: "left"
    },
    evenRow: {
        backgroundColor: grayBlue,
        color: "white",
    }
})
type RenderProps = {
    result: Repo,
    odd: boolean;
}

function Result({result, odd}: RenderProps) {
    const classes = useStyles();
    return (
        <div className={classNames({[classes.container]: true, [classes.evenRow]: odd}) }>
            <div className={classes.title}>Title: {result.name}</div>
            <div>Maker: {result.owner.login}</div>
            <div className={classes.description}>Description: {result.description}</div>
        </div>
    )
}

export default Result
