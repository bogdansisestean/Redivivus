import { Row } from "react-bootstrap";
import ServicesCard from "../servicesCard/servicesCard";
import { faFlag } from "@fortawesome/free-solid-svg-icons";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";

import styles from "./servicesBanner.module.css"

function ServicesBanner() {
    return (
        <div className="container-large content-spacer">
            <Row>
                <ServicesCard isPhoneNumber={false} bgColor={"services-first-bg-color"} icon={faFlag} heading={"EXPERIENȚĂ"} description={"BTN Car Solutions a acumulat experiență în domeniul PDR de-a lungul a 6 ani efectuând cursuri de pregătire profesională în Marea Britanie și în Germania, totodată efectuând reparații atât pe teritoriul României cât și în alte țări precum: Germania, Austria, Franța, Spania, Italia, Elveția sau Turcia ."} />
                <ServicesCard isPhoneNumber={false} bgColor={"services-second-bg-color"} icon={faCheckCircle} heading={"CALITATE"} description={"În cei 6 ani am reparat peste 5000 de mașini, toate lucrările fiind finalizate în timpul cel mai scurt posibil, calitate și fără reclamații ulterioare."} />
                <ServicesCard isPhoneNumber={true} phoneNumberContent={"0759 820 574"} bgColor={"services-third-bg-color"} icon={faCalendarAlt} heading={"DISPONIBILITATE"} description={"În orice locație sunteți, BTN Car Solutions vă poate pune la dispoziție în cel mai scurt timp o echipă de tehnicieni care sunt pregătiți să ajute la constatare, reparație, preluare și predare mașină."} />
            </Row>
        </div>
    )
}

export default ServicesBanner;