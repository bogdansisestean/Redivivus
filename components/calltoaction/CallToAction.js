import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faMailBulk, faPhone } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import CtaButton from '../../ui/ctabutton'
import UnderlineHeading from '../../ui/underlineHeading/underlineHeading'

import styles from "./callToAction.module.css"

function CallToAction() {
    return (
        <div className={styles.bgColor}>
            <div className="container-small content-spacer">
                <UnderlineHeading heading={"Ia legatura cu noi"} />
                <Row>
                    <Col xs={12} sm={12} md={12} lg={12} xl={6}>
                        <CtaButton link={"tel:+40 722 288 808"} content={"+40 722 288 808"} icon={faPhone} />
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={12} xl={6}>
                        <CtaButton link={"mailto: c.persu@serviceredivivus.ro"} content={"Email"} icon={faMailBulk} />
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default CallToAction
