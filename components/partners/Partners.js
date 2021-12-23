import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Apan from "../../public/images/Parteneri/Apan.png"
import Asirom from "../../public/images/Parteneri/Asirom.png"
import Autonom from "../../public/images/Parteneri/Autonom.png"
import AutomotiveBavaria from "../../public/images/Parteneri/AutomotiveBavaria.png"
import Garanta from "../../public/images/Parteneri/Garanta.png"
import Generali from "../../public/images/Parteneri/Generali.png"
import Gothaer from "../../public/images/Parteneri/Gothaer.png"
import Grawe from "../../public/images/Parteneri/Grawe.png"
import Groupama from "../../public/images/Parteneri/Groupama.png"
import Omniasig from "../../public/images/Parteneri/Omniasig.png"
import Porsche from "../../public/images/Parteneri/PorscheAsigurari.png"
import styles from "./Partners.module.css"

function Partners() {
    const className = `d-flex align-items-center ${styles.spacingTop}`
    return (
        <div className="container-small content-spacer">
            <Row>
                <Col xs={12} sm={6} md={4} lg={4} xl={4} className={className}>
                    <img src={Omniasig} alt={"logo Omniasig"} />
                </Col>
                <Col xs={12} sm={6} md={4} lg={4} xl={4} className={className}>
                    <img src={Asirom} alt={"logo Asirom"} />
                </Col>
                <Col xs={12} sm={6} md={4} lg={4} xl={4} className={className}>
                    <img src={Porsche} alt={"logo Porsche"} />
                </Col>
                <Col xs={12} sm={6} md={4} lg={4} xl={4} className={className}>
                    <img src={Generali} alt={"logo Generali"} />
                </Col>
                <Col xs={12} sm={6} md={4} lg={4} xl={4} className={className}>
                    <img src={Groupama} alt={"logo Groupama"} />
                </Col>
                <Col xs={12} sm={6} md={4} lg={4} xl={4} className={className}>
                    <img src={Grawe} alt={"logo Grawe"} />
                </Col>

                <Col xs={12} sm={6} md={6} lg={6} xl={6} className={className}>
                    <img src={Gothaer} alt={"logo Gothaer"} />
                </Col>
                <Col xs={12} sm={6} md={6} lg={6} xl={6} className={className}>
                    <img src={Garanta} alt={"logo Garanta"} />
                </Col>
                <Col xs={12} sm={6} md={4} lg={4} xl={4} className={className}>
                    <img src={Apan} alt={"logo Apan"} />
                </Col>
                <Col xs={12} sm={6} md={4} lg={4} xl={4} className={className}>
                    <img src={AutomotiveBavaria} alt={"logo AutomotiveBavaria"} />
                </Col>
                <Col xs={12} sm={6} md={4} lg={4} xl={4} className={className}>
                    <img src={Autonom} alt={"logo Autonom"} />
                </Col>
            </Row>
        </div>
    )
}

export default Partners
