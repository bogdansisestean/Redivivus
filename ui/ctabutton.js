import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Fragment } from "react";
import Link from "next/link"
import styles from "./ctabutton.module.css"

function CtaButton(props) {
    return (
        <Fragment>
            <Link href={props.link} >
                <a>
                    <p className={styles.buttonRedBg + " " + "span-white-thin"}><FontAwesomeIcon icon={props.icon} height="15" /> {props.content}</p>
                </a>
            </Link>
        </Fragment>
    )
}

export default CtaButton;