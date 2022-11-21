import React from "react";
import '../resources/styles/style.scss'

export default function SearchForAttendanceRegister() {
    return(
        <div class="sfs-modal">
        <div class="sfs-content">
          <img src="/images/searchRegisterBlack.png" width="100px" height="100px" alt="image unavailable"/>
          <form action="">
            <div class = "openText">
              <h1>   Search For Attendance Register  </h1>
            </div>
            <input type="textarea" placeholder="Enter Register ID" ></input>
            <input type="button" value="Search" ></input>
            
            <table className="resultsTable">
              <tr>
                <th>Register ID</th>
                <th>CourseSDF ID</th>
                <th>Module</th>
              </tr>
              <tr>
                <td>...</td>
                <td>...</td>
                <td>...</td>
               
              </tr>
              <tr>
                
              </tr>
            </table>
          </form>
        </div>
      </div>
    );
}