import React from "react";
import '../resources/styles/searchPages.scss'

export default function SearchForAStudent() {


    function checkMatch(){
        
    }
    return(
        <div class="sfs-modal">
        <div class="sfs-content">
          <img src="/images/searchUserBlack.png" width="100px" height="100px" alt="image unavailable"/>
          <form action="">
            <div class = "openText">
              <h1>   Search For A Student  </h1>
            </div>
            <input type="textarea" placeholder="Enter Student ID" ></input>
            <input type="button" value="Search" ></input>
            
            <table className="resultsTable">
              <tr>
                <th>Student ID</th>
                <th>Attendance Indicator</th>
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