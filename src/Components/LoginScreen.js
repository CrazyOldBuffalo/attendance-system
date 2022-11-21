import React from "react";
import '../Components/Auth/Styles/Login.scss'

export default function LoginScreen() {
    return(
        <div class="li-modal">
        <div class="limodal-content">
          <img src="/images/logIn.png" width="200px" height="200px" alt="image unavailable"/>
          <form action="">
            <div class = "openText">
              <h1 className="loginText">   Attendance <br/> System </h1>
            </div>
            <div className="area">
             <span>Username </span>
                <div className="unContainer">
                    
                    <input type="textarea" placeholder="Enter Username" id="username" ></input>
                </div>
                <span>Password </span>
                    <div className="pwContainer">
                         <input type="password" placeholder="Enter Password"  ></input>
                        </div>
                <div className="extraPadding">
                 <button class="button-54" href ="/LoginScreen" >Login
                 <img src="/images/cont.png" className ="cont"/>
                 </button>
                </div>
            </div>
            
          </form>
        </div>
      </div>
    );
}