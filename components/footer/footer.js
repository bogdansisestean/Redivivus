import { Row } from "react-bootstrap";
import styles from "./footer.module.css"

function Footer() {

    return (
        <footer className={"text-align-center content-spacer" + " " + styles.bgColor}>
            <Row>
                <p className="p-black-thin">Copyright © 2021 REDIVIVUS AUTO RUTIERE | Powered by REDIVIVUS AUTO RUTIERE</p>
            </Row>
            <h4>CONTACT INFO</h4>
            <Row>
                <a
                    href="mailto: c.persu@serviceredivivus.ro"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    c.persu@serviceredivivus.ro
                </a>
            </Row>
            <Row>
                <a
                    href="tel:+40 722 288 808"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    +40 722 288 808
                </a>
            </Row>
        </footer>
    )

}

export default Footer;