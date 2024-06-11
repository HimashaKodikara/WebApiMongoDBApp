import { useEffect,useState } from 'react';
import React, { Component } from 'react';
//import Student from './Student';

export default function Home()
  {
const[students, setStudents] = useState([]);
const [sid,setsid] = useState("");

const handleModal = (hide) =>{
  const deleteModal = document.querySelector('.delete-modal');
  if(deleteModal){
    if(hide){
      deleteModal.classList.add("hidden");
    }else{
    deleteModal.classList.remove("hidden");
    }
  }
};
const openDeleteModal = (id)=>{
  setsid(id);
  handleModal(false)  

};
const deleteStudent = ()=>{
 // console.log("The student id is",sid);
  //return
  fetch("api/student/"+sid,{
    method:"DELETE"
  }).then(r=>{
    console.log("The student is deleted",r);
    handleModal(true);
    window.location.reload();
  }).catch(e=> console.log("The error while deleting the student",e))
}
useEffect(() => {
  fetch("api/student").then(r=> r.json()).then(d=>{
    console.log("The sudents are",d)
    setStudents(d)
  }).catch(e=> console.log("The error fatching all students :",e))
}, []);

    return (
      <main>
         <h1>Student Manager Apllication</h1>
         
         <div className='add-btn'>
         <a href = "/new">+</a>
         </div>
         <table>
          <thead>
            <tr>
              <th>First name</th>
              <th>Last Name</th>
              <th>Class name</th>
              <th>Department</th>
              <th>Gender</th>
              <th>Birthday</th>
              <th>Graduated</th>
              <th>Age</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {
              students.length === 0 ? <td colSpan="8">No student found</td>:
              students.map(student=><tr key={student.id}>
                <td>{student.firstName}</td>
                <td>{student.lastName}</td>
                <td>{student.className}</td>
                <td>{student.department}</td>
                <td>{student.gender === 0 ?"Female":"Male"}</td>
                <td>{student.dateOfBirth.split("T")[0]}</td>
                <td>{student.isGraduated? "Yes" :"No"}</td>
                <td>{student.age}</td>
                <td><a href={"/edit?id="+student.id}>Edit</a></td>
                <td onClick={() =>openDeleteModal(student.id)}>Delete</td>
              </tr>)
            }
          
          </tbody>
         </table>
         <section className='delete-modal hidden'>
          <div className='modal-item'>
              <h3>Delete Student</h3>
              <p>Are you sure you want to delete this student</p>
              <div className="row mt-20 justify-btw">
        <div className="btn cancel" onClick={()=> {handleModal(true)}}>Cancel</div>
        <div className="btn add" onClick={deleteStudent}>Delete</div>
    </div>
            </div> 
         </section>
      </main>
    );
}

