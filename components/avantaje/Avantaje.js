import { faPagelines } from '@fortawesome/free-brands-svg-icons'
import { faClock, faTachometerAlt, faCheckDouble, faMoneyBillAlt, faScroll, faCheck, faTimesCircle, faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import IconHeadingAdvantages from '../../ui/iconHeadingAdvantages/iconHeadingAdvantages'
import UnderlineHeading from '../../ui/underlineHeading/underlineHeading'

import styles from "./Avantaje.module.css"

function Avantaje() {
    return (
        <div className={styles.background}>
            <div className="container-large">
                <UnderlineHeading heading={"Avantaje"} />
                <Row>
                    <Col xs={12} sm={12} md={12} lg={12} xl={6}>
                        <IconHeadingAdvantages icon={faClock} heading={"TIMPUL REDUS AL REPARATIEI COMPARAT CU TINICHIGERIA CLASICA"} />
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={12} xl={6}>
                        <IconHeadingAdvantages icon={faTachometerAlt} heading={"timp de reparatie foarte rapid ( 24-48 h )"} />
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={12} xl={6}>
                        <IconHeadingAdvantages icon={faCheckDouble} heading={"pastrarea vopselei originale si a valorii autoturismului"} />
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={12} xl={6}>
                        <IconHeadingAdvantages icon={faMoneyBillAlt} heading={"costuri reduse in comparatie cu tinichigeria clasica"} />
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={12} xl={6}>
                        <IconHeadingAdvantages icon={faPagelines} heading={"reparatie ecologica 100% cu respectarea normelor de mediu UE"} />
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={12} xl={6}>
                        <IconHeadingAdvantages icon={faScroll} heading={"pastrarea garantiei acordate de producator"} />
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={12} xl={6}>
                        <IconHeadingAdvantages icon={faCheck} heading={"fara diferente de nuanta"} />
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={12} xl={6}>
                        <IconHeadingAdvantages icon={faTimesCircle} heading={"nu se foloseste chit , nu exista slefuire , nu exista praf"} />
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={12} xl={6}>
                        <IconHeadingAdvantages icon={faThumbsUp} heading={"garantie extinsa pana la trei ani"} />
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default Avantaje
