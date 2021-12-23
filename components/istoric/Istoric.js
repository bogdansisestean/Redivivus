import React, { Fragment } from 'react'
import { Row } from 'react-bootstrap'
import styles from "./istoric.module.css"
import TextPicture from '../../ui/textPicture/TextPicture'
import UnderlineHeading from '../../ui/underlineHeading/underlineHeading'

function Istoric() {
    return (
        <div className={styles.bgColor}>
            <Row className="container-large content-spacer">
                <UnderlineHeading heading={"ISTORIC PAINTLESS DENT REPAIR"} />
                <TextPicture description={"Societatea noastra este specializata in reparatii PDR si isi desfasoara activitatea ca unitate service  mobila care se deplaseaza in zonele afectate de caderile de grindina, avand mai multi parteneri pe teritoriul Romaniei ( societati de asigurare , importatori auto, dealeri.)"} />
                <TextPicture description={"Aceasta metoda , Paintless Dent Repair ( reparatii fara revopsire ) , a aparut in urma cu aproximativ 50 de ani in Germania , dar , la scara mondiala ,a luat amploare de-abia in ultimii 20 de ani . Procesul tehnologic se realizeaza prin masarea repetata a suprafetelor elementelor caroseriei deformate de loviturile de grindina cu ajutorul unor scule si dispozitive speciale , manuite cu atentie,precizie,indemanare si rabdare de personal calificat ( tehnicieni PDR ). Astfel, tabla, aluminiul si vopseaua sunt readuse la forma initiala."} />
            </Row>
        </div>
    )
}

export default Istoric
