import { createUseStyles } from "react-jss"
import { Link, useLocation } from "react-router-dom"
import { classNames } from "../tools/classNames";
import { darkGray, darkYellow, lightYellow, mobileDevices, spacingMedium } from "../style/styles";


const useStyles = createUseStyles({
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 40,
        marginBottom: spacingMedium,
        padding: [spacingMedium, 0],
    },
    link: {
        background: darkYellow,
        borderRadius: spacingMedium / 2,
        padding: spacingMedium / 2,
        color: "white",
        textDecoration: "none",
        width: 80,
        [`@media(min-width : ${mobileDevices}px)`]: {
            width: 200,
        }
    },
    hideOnMobile: {
        [`@media(max-width : ${mobileDevices}px)`]: {
            display: "none",
        }
    },
    hideOnDesktop: {
        [`@media(min-width : ${mobileDevices}px)`]: {
            display: "none",
        }
    },
    active: {
        color: darkGray,
        background: lightYellow,
        fontWeight: 600,
        boxShadow: "10px 5px 5px lightgray"
    }
})

function Nav() {
    const classes = useStyles()
    const { pathname } = useLocation();

    return (
        <div className={classes.container}>
            <Link
                className={classNames({[classes.link]: true, [classes.active]: pathname === "/"})}
                to={"/"}
                >
                <span className={classes.hideOnDesktop}>Search</span>
                <span className={classes.hideOnMobile}>Continue searching</span>
            </Link>
            <Link
                className={classNames({[classes.link]: true, [classes.active]: pathname === "/history"})}
                to={"/history"}
            >
                <span className={classes.hideOnDesktop}>History</span>
                <span className={classes.hideOnMobile}>View history</span>
            </Link>
        </div>
    )
}

export default Nav
