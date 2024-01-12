import React, { Component, useState } from "react";
import Link from 'next/link'
import { Button, Modal, Form} from 'react-bootstrap';
import {addSiteLink} from "../../utils/Queries"


const LModal = (props) => {

console.log(props)

  const [text, setText] = useState();
  const [err, setErr] = useState(false);

  const addLink = async() => {

    if (text){
    const result = await addSiteLink(text)
    
    props.getlinks()

    props.onHide()
    } else {
      setErr("You must enter link text")
    }
  }

  const handleChange = (e) => {
    setText(e.target.value)

  }



  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add New Link
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>

  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Link:</Form.Label>
    <Form.Control as="textarea" rows={3}
    
    name="text"
    value={text}
    onChange={(e) => {
      handleChange(e);
    }}
    />
  </Form.Group>
  {err && 
  <div className="invalid-feedback display-block">
                    {err}
                  </div> 
}
</Form>
      </Modal.Body>
      <Modal.Footer>
      <Button variant="secondary" onClick={props.onHide}>Close</Button>
    <Button variant="primary" onClick={() => addLink()}>Add Link</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default LModal;
