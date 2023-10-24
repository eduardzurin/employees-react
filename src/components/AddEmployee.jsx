import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from 'react-bootstrap/Form';
import { useState } from "react";
import { useFormik } from 'formik';

export default function AddEmployee({createEmployee}) {


  const formik = useFormik({
    initialValues: {
      // contains all default values for the form
      // this will be containing values from state in case of update
      name: '',
      title: '',
      tribe: '',
      date: '',
    },
    validate: (values) => {
      // if error object is not empty, then based on name attribute of form input element, you will see errors, that you can render anyway you like
      const regex = /\d{1,2}\/\d{1,2}\/\d{2,4}/g 
      const errors = {};

      if (!values.name) {
        errors.name = 'Name is required';
      }
      if (!values.title) {
        errors.title = 'Title is required';
      }
      if (!values.tribe) {
        errors.tribe = 'Tribe is required';
      }
      if (!values.date) {
        errors.date = 'Date is required';
      }
      if (!values.date.match(regex)){
        errors.reg = 'Date in wrong format';
      }
      return errors;
    },
    onSubmit: async (values, { resetForm }) => {
      // this is the function called when submit button is clicked
      try {
				console.log(values); // values in form when form is submitted
        createEmployee(values);
        handleClose();
        resetForm();
      } catch (error) {
        console.error(error);
      }
    },
  });



  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
    <div className="container-fluid my-4">
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
                name="name"
                placeholder="Name"
                autoFocus
                onChange={formik.handleChange} 
                value={formik.values.name}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="text"
                name="title"
                placeholder="Title"
                autoFocus
                onChange={formik.handleChange} 
                value={formik.values.title}
              />
            </Form.Group>
            <Form.Select name="tribe" onChange={formik.handleChange} value={formik.values.tribe} aria-label="Default select example">
      <option>Select tribe</option>
      <option value="Interstellar">Interstellar</option>
      <option value="Gears">Gears</option>
      <option value="Billing">Billing</option>
    </Form.Select>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Start date:</Form.Label>
              <Form.Control
                type="text"
                name="date"
                placeholder="DD/MM/YYYY"
                autoFocus
                onChange={formik.handleChange}
                value={formik.values.date}
              />
            </Form.Group>
          </Form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button type="submit" variant="primary" onClick={() => formik.handleSubmit()} disabled={Object.keys(formik.errors).length > 0 || !formik.dirty}>
            Add Employee
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
