import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { Fragment } from "react";
import CtaButton from "../../ui/ctabutton";
import styles from "./FirstSection.module.css"

function FirstSection(props) {

    return (
        <div className={styles.firstSectionContainer}>
            <div className="container-small">
                <div className={styles.textAreaContainer}>
                    <h1 className="text-align-center h1-black-medium uppercase">{props.mainHeading}</h1>
                    <h2 className="text-align-center h3-black-thin underline-small">{props.subHeading}</h2>
                    <p className="p-small-black p-black-thin text-align-center">{props.description}</p>
                    <CtaButton link={"tel:+40 722 288 808"}
                        content={"Apelează-ne la +40 722 288 808"} icon={faPhone}/>
                </div>
            </div>
        </div>
    )

}

export default FirstSection;