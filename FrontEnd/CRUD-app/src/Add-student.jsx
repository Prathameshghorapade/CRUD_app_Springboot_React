import axios from 'axios';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom'; // 👈 Import

function AddStudent() {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    age: "",
    dept: ""
  });

  const navigate = useNavigate(); // 👈 Use navigate hook

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8080/user/add", formData);
      alert("Student Added");
      setFormData({ id: "", name: "", age: "", dept: "" });
    } catch (error) {
      console.error("Error adding student:", error);
      alert("Failed to add student");
    }
  };

  const goToViewPage = () => {
    navigate("/view-student"); // 👈 Redirect to /view
  };

  return (
    <div className="form-container">
      <Form onSubmit={handleSubmit}>
        <h2 className="form-heading">Add Student</h2>

        <Form.Group className="mb-3">
          <Form.Label>Id</Form.Label>
          <Form.Control type="text" placeholder="Enter Id" name="id" value={formData.id} onChange={handleChange} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your Name" name="name" value={formData.name} onChange={handleChange} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Age</Form.Label>
          <Form.Control type="text" placeholder="Enter your age" name="age" value={formData.age} onChange={handleChange} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Department</Form.Label>
          <Form.Control type="text" placeholder="Enter your Department" name="dept" value={formData.dept} onChange={handleChange} />
        </Form.Group>

        <Form.Group className="mb-3 text-center">
          <Form.Control type="submit" value={"Submit"} className="submit-btn" />
        </Form.Group>
      </Form>

      <div className="text-center mt-3">
        <button className="btn btn-primary" onClick={goToViewPage}>
          View All Students
        </button>
      </div>
    </div>

    
  );
}

export default AddStudent;
