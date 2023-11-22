import { createUseStyles } from "react-jss"
import { Link, useLocation } from "react-router-dom"
import { classNames } from "../tools/classNames";

const useStyles = createUseStyles({
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 40,
        marginBottom: 18,
        padding: [18, 0],
    },
    link: {
        background: "#6b6a02",
        borderRadius: 9,
        padding: 9,
        color: "white",
        textDecoration: "none",
        width: 200,
    },
    active: {
        color: "#4a4a4a",
        background: "#f2f157",
        fontWeight: 600,
        boxShadow: "10px 5px 5px lightgray"
    }
})

function Nav() {
    const classes = useStyles()
    const { pathname} = useLocation();

    return (
        <div className={classes.container}>
            <Link
                className={classNames({[classes.link]: true, [classes.active]: pathname === "/"})}
                to={"/"}
                >
                    Continue searching
            </Link>
            <Link
                className={classNames({[classes.link]: true, [classes.active]: pathname === "/history"})}
                to={"/history"}
            >
                View history
            </Link>
        </div>
    )
}

export default Nav
