import { useEffect,useState } from 'react';
import React, { Component } from 'react';
//import Student from './Student';

export default function Home()  {
const[students, setStudents] = useState([]);

useEffect(() => {
  fetch("api/student").then(r=> r.json()).then(d=>{
    console.log("The sudents are",d)
    setStudents(d)
  }).catch(e=> console.log("The error fatching all students :",e))
}, [])
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
            <tr>{
              students.length === 0 ? <td colSpan="8">No student found</td>:
              students.map(student=><tr key={student.id}>
                <td>{student.firstame}</td>
                <td>{student.lastName}</td>
                <td>{student.className}</td>
                <td>{student.department}</td>
                <td>{student.gender === 0 ?"Female":"Male"}</td>
                <td>{student.dateOfBirth.split("T")[0]}</td>
                <td>{student.isGraduated? "Yes" :"No"}</td>
                <td>{student.age}</td>
                <td><a href={"/edit?id="+student.id}></a>Edit</td>
                <td>Delete</td>
              </tr>)
            }
            </tr>
          </tbody>
         </table>
      </main>
    );
}

