import { createUseStyles } from "react-jss";
import { classNames } from "../tools/classNames";
import { grayBlue, mobileDevices, spacingMedium, spacingSmall } from "../style/styles";
import { useAppSelector } from "../tools/hooks";
import { selectRepo } from "../reducers/repo";

const useStyles = createUseStyles({
    container: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        gap: spacingSmall,
        alignItems: "baseline",
        marginBottom: spacingSmall * 2,
        fontSize: 16,
        padding: [spacingMedium / 2, spacingMedium]
    },
    textContainer: {
        textAlign: "left",
    },
    title: {
        fontWeight: 600,
        flexShrink: 0,
        [`@media(max-width : ${mobileDevices}px)`]: {
            textAlign: "left",
            overflow: "hidden",
            flexBasis: "100%",
        },
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
            <div>Forks: {repo?.forks}</div>
            <div>Stars: {repo?.stargazers_count}</div>
            <div className={classes.description}>Description: {repo?.description}</div>
        </div>
    )
}

export default Result
