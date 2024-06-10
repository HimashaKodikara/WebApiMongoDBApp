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
    return(
<section className="m-20">
    <h1>Update Student</h1>
    <div className="mt-10">
        <label htmlFor="fn">First Name</label>
        <input type="text" name="firstName" id="fn" onChange={newData}/>
    </div>
    <div className="mt-10">
        <label htmlFor="ln">Last Name</label>
        <input type="text" name="lastName" id="ln" onChange={newData}/>
    </div>
    <div className="mt-10">
        <label htmlFor="cn">Class Name</label>
        <input type="text" name="className" id="cn" onChange={newData}/>
    </div>
    <div className="mt-10">
        <label htmlFor="dp">Department</label>
        <input type="text" name="department" id="dp" onChange={newData}/>
    </div>
    <div className="mt-10">
        <label htmlFor="gender">Gender</label>
        <select name="gender" id="gender" onChange={newData}>
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
        <select name="idgraduated" id="graduated" onChange={newData}>
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