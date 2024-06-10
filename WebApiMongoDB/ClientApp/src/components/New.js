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
export default function New(props) {
    const addNewStudent = ()=>{
        console.log("The new student is:",entry);
        fetch("api/student",{
            method:"POST",
            body:JSON.stringify(entry)
        }).then(r=>{
            console.log("Response from Backend for adding new student :",r)
        }).catch(e=>console.log("The error while adding new student",e))
    }
    const newData = (e)=>{
        const name = e.target.name;
        let v_ = e.target.value

        if(name_ ==='dateOfBirth'){
            v_ = new Date(v_);
        }
        if(name_ === 'gender'){
            v_ = Number(v_);
        }
        if(name_ === 'isGraduated'){
            v_ = v_ === '1' ? true : false;
        }
        entry[name] = v_

        console.log("The New Student Is:",entry)
    }
    return(
<section className="m-20">
    <h1>Add new Student</h1>
    <div>
        <label htmlFor="fn">First Name</label>
        <input type="text" name="FirstName" id="fn" onChange={newData}/>
    </div>
    <div>
        <label htmlFor="ln">Last Name</label>
        <input type="text" name="lastName" id="ln" onChange={newData}/>
    </div>
    <div>
        <label htmlFor="cn">Class Name</label>
        <input type="text" name="className" id="cn" onChange={newData}/>
    </div>
    <div>
        <label htmlFor="dp">Department</label>
        <input type="text" name="department" id="dp" onChange={newData}/>
    </div>
    <div>
        <label htmlFor="gender">Gender</label>
        <select name="gender" id="gender" onChange={newData}>
            <option value={1}>Male</option>
            <option value={0}>Female</option>
        </select>
        
    </div>
    <div>
        <label htmlFor="dob">Birthday</label>
        <input type="date" name="dateOfBirth" id="dob" onChange={newData}/>
    </div>
    <div>
        <label htmlFor="graduated">Is Graduated</label>
        <select name="idgraduated" id="graduated" onChange={newData}>
            <option value={1}>Yes</option>
            <option value={0}>No</option>
        </select>
        
    </div>
    <div>
        <div>Cancel</div>
        <div onClick={addNewStudent}>Add</div>
    </div>
</section>
    );
}