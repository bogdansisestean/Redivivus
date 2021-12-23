import styles from "./underlineHeading.module.css"

function UnderlineHeading(props) {
    return (
        <h2 className={styles.underline + " " + "h3-black-medium"}>{props.heading}</h2>
    )
}

export default UnderlineHeading