import { useEffect, useState } from "react";

const entry = {
    id: "",
    firstName: "",
    lastName: "",
    className: "",
    department:"",
    gender:0,
    dateOfBirth: new Date(),
    isGraduated:false,
    age:0
}
export default function Edit(props) {

    const [data,setData] = useState([]); 
    const [gender,setGender] = useState(0); 
    const [graduated,setGraduated] = useState(false); 
    const [sid,setsid] = useState("");
    const UpdateStudent = ()=>{
        console.log("The new student is:",entry);
        fetch("api/student",{
            method:"PUT",
            body:JSON.stringify(entry),
            headers:{
                "Content-Type":"application/json"	
            }
        }).then(r=>{
            console.log("Response for updating a student :",r);
            window.location="/"
        }).catch(e=>console.log("Error updating a student",e));
    }
    const newData = (e)=>{
        const name_ = e.target.name;
        let v_ = e.target.value

        if(name_ ==='dateOfBirth'){
            v_ = new Date(v_);
            entry.age = new Date().getFullYear() - v_.getFullYear();
        }
        if(name_ === 'gender'){
            v_ = Number(v_);
            setGender(v_)
        }
        if(name_ === 'isGraduated'){
            v_ = v_ === '1';
            setGraduated(v_);
        }
        entry[name_] = v_

        console.log("The New Student Is:",entry)
    }
    useEffect(()=>{
        const id_ = window.location.search
        if(id_){
            id_ = id_.split("=")[1]
        }
        if(id_){
            fetch("api/student/"+id).then(r=> r.json()).then(d =>{
                console.log("The student for update is:",d)
                setData(d)
                setGender(d.gender)
                setGraduated(d.isGraduated)
            }).catch(e=>console.log("Error getting student for update",e))
        }
       
    })
    return(
<section className="m-20">
    <h1>Update Student</h1>
    <div className="mt-10">
        <label htmlFor="fn">First Name</label>
        <input type="text" name="firstName" id="fn" defaultValue={data.firstName} onChange={newData}/>
    </div>
    <div className="mt-10">
        <label htmlFor="ln">Last Name</label>
        <input type="text" name="lastName" id="ln" defaultValue={data.lastName} onChange={newData}/>
    </div>
    <div className="mt-10">
        <label htmlFor="cn">Class Name</label>
        <input type="text" name="className" id="cn" defaultValue={data.className} onChange={newData}/>
    </div>
    <div className="mt-10">
        <label htmlFor="dp">Department</label>
        <input type="text" name="department" id="dp" defaultValue={data.department} onChange={newData}/>
    </div>
    <div className="mt-10">
        <label htmlFor="gender">Gender</label>
        <select name="gender" id="gender" value={gender} onChange={newData}>
            <option value={1}>Male</option>
            <option value={0}>Female</option>
        </select>
        
    </div>
    <div className="mt-10">
        <label htmlFor="dob">Birthday</label>
        <input type="date" name="dateOfBirth" id="dob" onChange={newData}/>
    </div>
    <div className="mt-10">
        <label htmlFor="graduated">Is Graduated</label>
        <select name="idgraduated" id="graduated" value={graduated} onChange={newData}>
            <option value={true}>Yes</option>
            <option value={false}>No</option>
        </select>
        
    </div>
    <div className="mt-30 row p20 justify-btw">
        <div className="btn cancel" onClick={()=> window.location = "/"}>Cancel</div>
        <div className="btn add" onClick={UpdateStudent}>Add</div>
    </div>
</section>
    );
}