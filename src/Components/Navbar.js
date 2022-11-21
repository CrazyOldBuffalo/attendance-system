export default function Navbar(){
    return <nav className="nav">
        <a href="/"className = "site-title">Attendance System</a>
        <a href="Components/ViewAttendance" className="site-logo"> <img src="/images/ViewAttendance.png" width="30px" height="30px"/> </a>
        <ul>
            <li >
                <span>Home</span>
                <a className="homeButton"href="/Home"> <img src="/images/home.png" width="30px" height="30px"/> </a>
            </li>
            <li>
            <span>Register Attendance</span>
            <a href="/RegisterAttendance"> <img src="/images/EditRegister.png" width="30px" height="30px"/> </a>
            </li>
            <li>
            <span>Search for Student</span>
            <a href="/SearchForAStudent"> <img src="/images/usersearch.png" width="30px" height="30px"/> </a>
            </li>
            <li>
            <span>Search for Register</span>
            <a href="/SearchForAttendanceRegister"> <img src="/images/searchRegister.png" width="30px" height="30px"/> </a>
            </li>
            <li>
            <span>View Attendance</span>
            <a href="/ViewAttendance"> <img src="/images/ViewAttendance.png" width="30px" height="30px"/> </a>
            </li>

            <li>
                <div className="extraPad">
                    <a href="/LoginScreen">
            <button class="button-54" href ="/LoginScreen" >
                
                Log Out
                <img src="/images/logOut.png" className ="logOutimg"/>
            
            </button>
            </a>
            </div>

            </li>
        </ul>
    
    </nav>
}