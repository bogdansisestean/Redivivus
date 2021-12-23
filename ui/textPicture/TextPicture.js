import React from 'react'
import { Col } from 'react-bootstrap'

function TextPicture(props) {
    return (
            <Col xs={12} sm={12} md={12} lg={6} xl={6}>
                <p className="p-black-bigger">{props.description}</p>
            </Col>
    )
}

export default TextPicture
