import axios from "axios";
import { useEffect, useState } from "react";
import Form from 'react-bootstrap/Form';
import { useNavigate, useParams } from "react-router-dom";

function UpdateStudent() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    age: "",
    dept: ""
  });

  useEffect(() => {
    axios.get(`http://localhost:8080/user/${id}`)
      .then((res) => setFormData(res.data))
      .catch((err) => console.error("Error fetching user:", err));
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8080/user/update/${id}`, formData);
      alert("Student Updated");
      navigate("/add-student");
    } catch (error) {
      console.error("Update failed:", error);
      alert("Failed to update student");
    }
  };

  return (
    <div className="form-container">
      <Form onSubmit={handleUpdate}>
        <h2 className="form-heading">Update Student</h2>

        <Form.Group className="mb-3">
          <Form.Label>Id</Form.Label>
          <Form.Control type="text" name="id" value={formData.id} readOnly />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" name="name" value={formData.name} onChange={handleChange} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Age</Form.Label>
          <Form.Control type="text" name="age" value={formData.age} onChange={handleChange} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Department</Form.Label>
          <Form.Control type="text" name="dept" value={formData.dept} onChange={handleChange} />
        </Form.Group>

        <div className="text-center">
          <button type="submit" className="btn btn-success">Update</button>
        </div>
      </Form>
    </div>
  );
}

export default UpdateStudent;
