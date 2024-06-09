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
         <a href = "/new">+</a>
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
            </tr>
          </thead>
          <tbody>
            <tr>{
              students.length === 0 ? <div className='row waiting'><div>Loading</div> <div className='loading'></div></div>:
              students.map(student=><tr>
                <td>{student.firstName}</td>
                <td>{student.lastName}</td>
                <td>{student.className}</td>
                <td>{student.department}</td>
                <td>{student.gender}</td>
                <td>{student.dateOfBirth}</td>
                <td>{student.isGraduated}</td>
                <td>{student.age}</td>
              </tr>)
            }
            </tr>
          </tbody>
         </table>
      </main>
    );
}

