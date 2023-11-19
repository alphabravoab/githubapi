import { createUseStyles } from "react-jss"
import { Link, useLocation } from "react-router-dom"


const useStyles = createUseStyles({
    container: {
        display: "flex",
        width: "100dvw",
        justifyContent: "center",
        alignItems: "center",
        gap: 40,
        marginBottom: 36,
        padding: [18, 0],
        borderBottom: "3px solid white",
    },
    link: {
        background: "#6b6a02",
        borderRadius: 9,
        padding: 9,
        color: "white",
        textDecoration: "none",
        fontWeight: 600,
        width: 400
    },
    active: {
        color: "#4a4a4a",
        background: "#f2f157",
    }
})

function Nav() {
    const classes = useStyles()
    const { pathname} = useLocation();

    return (
        <div className={classes.container}>
            <Link 
                className={`${classes.link} ${pathname === "/" ? classes.active : ""}`} 
                to={"/"}
                >
                    Continue searching
            </Link>
            <Link 
                className={`${classes.link} ${pathname === "/history" ? classes.active : ""}`} 
                to={"/history"}
            >
                View history
            </Link>
        </div>
    )
}

export default Nav