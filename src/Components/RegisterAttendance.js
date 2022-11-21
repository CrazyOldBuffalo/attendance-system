import React from "react";
import Button from 'react-bootstrap/Button';


import '../resources/styles/RegisterAttendance.scss'


export default function RegisterAttendance() {

  function changeStatusP(){
    document.getElementById('attendanceStat').innerHTML = 'Present';
    document.getElementById('attendanceStat').style.backgroundColor='lightgreen';
  }
  function changeStatusA(){
    document.getElementById('attendanceStat').innerHTML = 'Absent';
    document.getElementById('attendanceStat').style.backgroundColor='lightcoral';
  }
    return(
        <div class="ra-modal">
        <div class="ramodal-content">
          <img src="/images/registerAttendanceBlack.png" className = "titleImg"width="75px" height="75px" alt="image unavailable"/>
          <form action="">
            <div class = "openText">
              <h1 className="title">   Register Attendance of Student</h1>
            </div>
            <div className="textEntryArea">


                <p> Enter Student ID</p>

                <div className="individualEntryBox">

                    <input type="textarea" placeholder="Student ID" ></input>
                  
                    <input type="button" value="Search" ></input>
                
                <p> Enter Module ID</p>

                <div className="individualEntryBox">
                    <input type="textarea" placeholder="Module ID" ></input>
                    <input type="button" value="Search" ></input>
                </div>
              </div>

                <p> Enter Seminar/Lecture ID</p>

                <div className="individualEntryBox">
                    <input type="textarea" placeholder="Seminar/Lecture ID" ></input>
                    <input type="button" value="Search" ></input>
                </div>

                <input type="button" className="checkDetailsButton" value="Get Attendance Status"></input>

                <div className="currentAttendanceStatus">
                    Current Attendance Status:   <br></br>
                       <label className="attendanceStatus" id="attendanceStat">N/A</label>
                </div>
                <p className="attendanceStatusText">Alter Attendance Status</p>

                <div className="buttonOverlay">
                  <input type="button" className="absentButton" href ="/LoginScreen" value="Absent"onClick={changeStatusA}></input>
                  <input type="button" class="presentButton" href ="/LoginScreen" value="Present" onClick={changeStatusP}></input>                
                </div>
            </div>
            
           
          </form>
        </div>
      </div>























    );
}







