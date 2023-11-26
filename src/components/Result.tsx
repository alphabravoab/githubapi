import { createUseStyles } from "react-jss";
import { classNames } from "../tools/classNames";
import { grayBlue } from "../style/styles";
import { useAppSelector } from "../tools/hooks";
import { selectRepo } from "../reducers/repo";

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
    result: number,
    odd: boolean;
}

function Result({result, odd}: RenderProps) {
    const classes = useStyles();
    const repo = useAppSelector(selectRepo(result));
    return (
        <div className={classNames({[classes.container]: true, [classes.evenRow]: odd}) }>
            <div className={classes.title}>Title: {repo?.name}</div>
            <div>Maker: {repo?.owner.login}</div>
            <div className={classes.description}>Description: {repo?.description}</div>
        </div>
    )
}

export default Result
