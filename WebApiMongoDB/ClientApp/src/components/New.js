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
            body:JSON.stringify(entry),
            headers:{
                "Content-Type":"application/json"	
            }
        }).then(r=>{
            console.log("Response from Backend for adding new student :",r);
            window.location="/"
        }).catch(e=>console.log("The error while adding new student",e))
    }
    const newData = (e)=>{
        const name_ = e.target.name;
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
        entry[name_] = v_

        console.log("The New Student Is:",entry)
    }
    return(
<section className="m-20">
    <h1>Add new Student</h1>
    <div className="mt-10">
        <label htmlFor="fn">First Name</label>
        <input type="text" name="firstName" writingsuggestions="enabled" id="fn" onChange={newData}/>
    </div>
    <div className="mt-10">
        <label htmlFor="ln">Last Name</label>
        <input type="text" name="lastName"  writingsuggestions="enabled" id="ln" onChange={newData}/>
    </div>
    <div className="mt-10">
        <label htmlFor="cn">Class Name</label>
        <input type="text" name="className"  writingsuggestions="enabled" id="cn" onChange={newData}/>
    </div>
    <div className="mt-10">
        <label htmlFor="dp">Department</label>
        <input type="text" name="department"  writingsuggestions="enabled" id="dp" onChange={newData}/>
    </div>
    <div className="mt-10">
        <label htmlFor="gender">Gender</label>
        <select name="gender"  writingsuggestions="enabled" id="gender" onChange={newData}>
            <option value={1}>Male</option>
            <option value={0}>Female</option>
        </select>
        
    </div>
    <div className="mt-10">
        <label htmlFor="dob">Birthday</label>
        <input type="date"  writingsuggestions="enabled" name="dateOfBirth" id="dob" onChange={newData}/>
    </div>
    <div className="mt-10">
        <label htmlFor="graduated">Is Graduated</label>
        <select name="idgraduated"  writingsuggestions="enabled" id="graduated" onChange={newData}>
            <option value={1}>Yes</option>
            <option value={0}>No</option>
        </select>
        
    </div>
    <div className="mt-30 row p20 justify-btw">
        <div className="btn cancel" onClick={()=> window.location = "/"}>Cancel</div>
        <div className="btn add" onClick={addNewStudent}>Add</div>
    </div>
</section>
    );
}