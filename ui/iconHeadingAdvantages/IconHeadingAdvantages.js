import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { Col, Row } from 'react-bootstrap';
import styles from "./iconHeadingAdvantages.module.css"

function IconHeadingAdvantages(props) {
    return (
        <Row className={styles.spacer}>
            <Col xs={2} sm={1} md={2} lg={2} xl={1}>
                <FontAwesomeIcon icon={props.icon} height="40" color="#d81e1e" />
            </Col>
            <Col xs={10} sm={11} md={10} lg={10} xl={11}>
                <h6 className="h6-black-medium uppercase">{props.heading}</h6>
            </Col>
        </Row>
    )
}

export default IconHeadingAdvantages;
