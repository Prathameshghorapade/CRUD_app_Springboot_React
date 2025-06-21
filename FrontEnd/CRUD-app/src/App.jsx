
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


import AddStudent from './add-student';

import ViewStudent from './view-student';

import UpdateStudent from './UpdateStudent';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
 

function App() {
 
  return (
    <>
     <BrowserRouter>
     <Routes>
     <Route path="/add-student" element={<AddStudent />} />
<Route path="/view-student" element={<ViewStudent />} />
<Route path="/update/:id" element={<UpdateStudent />} />

     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
