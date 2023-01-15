import React from "react";
class Hobbies extends React.Component{
render(){
    const Array = [
        <p>swimming</p>,
        <p>Debugging</p>,
        <p>cooking</p>
    ];
   
    return (
      <div>
        {Array}
      </div>
    );
   }
}
export default Hobbies