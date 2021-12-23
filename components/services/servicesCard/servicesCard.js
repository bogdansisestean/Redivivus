import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Row } from "react-bootstrap";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

import styles from "./servicesCard.module.css"

function ServicesCard(props) {
    if (!props.isPhoneNumber) {
        return (

            <Col xs={4} sm={4} md={4} lg={4} xl={4}>
                <div className={styles.wrapper}>
                    <FontAwesomeIcon icon={props.icon} height="50" color="yellow" />
                    <h4 className={"h4-black-bold" + " " + styles.heading}>{props.heading}</h4>
                    <p className="p-black-thin">{props.description}</p>

                </div>
            </Col>
        )
    } else
        return (
            <Col xs={4} sm={4} md={4} lg={4} xl={4}>
                <div className={styles.wrapper}>
                    <FontAwesomeIcon icon={props.icon} height="50" color="yellow" />
                    <h4 className={"h4-black-bold" + " " + styles.heading}>{props.heading}</h4>
                    <p className="p-black-thin">{props.description}</p>
                    <p className={styles.phoneNumber}>{props.phoneNumberContent}</p>
                    <Row>
                        <Col xs={1} sm={1} md={1} lg={1} xl={1}>
                            <FontAwesomeIcon icon={faPhone} height="20" color="#d81e1e" />
                        </Col>
                        <Col xs={11} sm={11} md={11} lg={11} xl={11}>
                            <a className={styles.cta} href="tel: +40 722 288 808">Suna-ne acum</a>
                        </Col>
                    </Row>
                </div>
            </Col>
        )
}

export default ServicesCard;