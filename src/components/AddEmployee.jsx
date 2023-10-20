import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import { useState } from "react";

export default function AddEmployee() {
  const [show, setShow] = useState(false);
  const [tribe, setTribe] = useState('Tribe')

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
    <div class="container-fluid my-4">
        <Button variant="primary" onClick={handleShow}>
          Add
        </Button>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add employees</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="text"
                placeholder="Name"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="text"
                placeholder="Position"
                autoFocus
              />
            </Form.Group>
            <Form.Select aria-label="Default select example">
      <option>Select tribe</option>
      <option value="Interstellar">Interstellar</option>
      <option value="Gears">Gears</option>
      <option value="Billing">Billing</option>
    </Form.Select>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Start date:</Form.Label>
              <Form.Control
                type="text"
                placeholder="DD/MM/YYYY"
                autoFocus
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Add Employee
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
