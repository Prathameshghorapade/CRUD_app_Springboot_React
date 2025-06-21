import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ViewStudent.css';

function ViewStudent() {
  const [students, setStudents] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get("http://localhost:8080/user/all");
        setStudents(response.data);
      } catch (error) {
        console.error("Error fetching students:", error);
      }
    };

    fetchStudents();
  }, []);

  // ✅ Delete handler
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this student?");
    if (!confirmDelete) return;

    try {
      await axios.delete(`http://localhost:8080/user/delete/${id}`);
      alert("Student Deleted");
      setStudents(students.filter(student => student.id !== id));
    } catch (error) {
      console.error("Error deleting student:", error);
      alert("Failed to delete student");
    }
  };

  return (
    <div className="view-student-container">
      <h2 className="title">All Student Records</h2>
      {students.length === 0 ? (
        <p className="no-data">No students found.</p>
      ) : (
        <div className="card-container">
          {students.map((student) => (
            <div key={student.id} className="student-card">
              <form className="student-form">
                <div className="form-group">
                  <label>ID</label>
                  <input type="text" value={student.id} readOnly />
                </div>
                <div className="form-group">
                  <label>Name</label>
                  <input type="text" value={student.name} readOnly />
                </div>
                <div className="form-group">
                  <label>Age</label>
                  <input type="text" value={student.age} readOnly />
                </div>
                <div className="form-group">
                  <label>Department</label>
                  <input type="text" value={student.dept} readOnly />
                </div>

                <div className="form-group text-center d-flex justify-content-center">
                  <button
                    className="btn btn-warning mt-2"
                    type="button"
                    onClick={() => navigate(`/update/${student.id}`)}
                  >
                    Update
                  </button>

                  <button
                    className="btn btn-danger mt-2 ms-2"
                    type="button"
                    onClick={() => handleDelete(student.id)}
                  >
                    Delete
                  </button>
                </div>
              </form>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ViewStudent;
