import UnderlineHeading from "../../../ui/underlineHeading/underlineHeading"
import ServicesBanner from "../servicesBanner/servicesBanner"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./servicesComponent.module.css"
import { faSearchPlus, faFileContract, faTools } from "@fortawesome/free-solid-svg-icons";
import { Col, Row } from "react-bootstrap";
import { Fragment } from "react";

function ServicesComponent() {
    return (
        <Fragment>
            {/* <ServicesBanner /> */}
            <div className="container-large content-spacer">
                <UnderlineHeading heading={"Servicii"} />
            </div>
            <Row className="content-spacer">
                <Col xs={12} sm={12} md={4} lg={4} xl={4} >
                    <FontAwesomeIcon icon={faSearchPlus} height="50" color="#d81e1e" className={"d-flex justify-content-center" + " " + styles.faIcon} />
                    <h4 className={styles.headingSpacing + " " + "uppercase h4-black-bold d-flex justify-content-center"}>Constatarea daunelor</h4>
                </Col>
                <Col xs={12} sm={12} md={4} lg={4} xl={4} >
                    <FontAwesomeIcon icon={faFileContract} height="50" color="#d81e1e" className={"d-flex justify-content-center" + " " + styles.faIcon} />
                    <h4 className={styles.headingSpacing + " " + "uppercase h4-black-bold d-flex justify-content-center"}>ÎNTOCMIREA ACTELOR</h4>
                </Col>
                <Col xs={12} sm={12} md={4} lg={4} xl={4} >
                    <FontAwesomeIcon icon={faTools} height="50" color="#d81e1e" className={"d-flex justify-content-center" + " " + styles.faIcon} />
                    <h4 className={styles.headingSpacing + " " + "uppercase h4-black-bold d-flex justify-content-center"}>REPARAȚIE</h4>
                </Col>
            </Row>
        </Fragment>
    )
}

export default ServicesComponent
