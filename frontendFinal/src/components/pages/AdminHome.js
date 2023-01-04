import Adminform from "../Adminform"
import Instructorform from "../Instructorform"
import CopTrainee from"../CopTraine"
//import './Adminhome.css'
const AdminHome=()=>{
    return (
        <div className="AdminHome">
            <h1>Admin Home</h1>
            <Adminform/>
            <Instructorform/>
            <CopTrainee/>

        </div>
    )
}

export default AdminHome