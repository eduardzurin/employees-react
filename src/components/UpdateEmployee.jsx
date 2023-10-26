import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import  { useState }  from "react";
import { useFormik } from "formik";
import { axiosInstance } from "../index.js";
import { useDispatch } from 'react-redux';
import { updateEmp } from "../store/actions/employees";

export default function UpdateEmployee({ updateEmployee, employee }) {
  const  dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      id: employee.id,
      name: employee.name,
      title: employee.title,
      tribe: employee.tribe,
    },
    validate: (values) => {
      const errors = {};

      if (!values.name) {
        errors.name = "Name is required";
      }
      if (!values.title) {
        errors.title = "Title is required";
      }
      if (!values.tribe) {
        errors.tribe = "Tribe is required";
      }
      return errors;
    },
    onSubmit: async (values, { resetForm }) => {
      try {
        dispatch(updateEmp(values))
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
        <Button id='updatebtn' variant="primary" onClick={handleShow}>
          Update
        </Button>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update employee</Modal.Title>
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
            <Form.Select
              name="tribe"
              onChange={formik.handleChange}
              value={formik.values.tribe}
              aria-label="Default select example"
            >
              <option>{employee.tribe}</option>
              <option value={1}>Internstellar</option>
              <option value={2}>Billing</option>
              <option value={3}>Gears</option>
            </Form.Select>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            type="submit"
            variant="primary"
            onClick={() => formik.handleSubmit()}
            disabled={Object.keys(formik.errors).length > 0 || !formik.dirty}
          >
            Update Employee
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
