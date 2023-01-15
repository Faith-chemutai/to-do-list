import React from "react";
import './styles.css'
class User extends React.Component{
    render(){
     return(
        <div>
     <form>
        <label for="fname">First name:</label>
        <input type="text" id="fname" name="fname"></input><br></br>

        <label for="lname">Last name:</label>
        <input type="text" id="lname" name="lname"></input><br></br>

        <label for="email">Email:</label>
        <input type="text" id="email" name="email"></input>
     </form>
  
</div>
     );
    }
}
export default User


