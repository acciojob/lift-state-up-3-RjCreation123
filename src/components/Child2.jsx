import React from 'react'

const Child2 = ({value}) => {

  const handleChange = (e) => {
    value(e);
  };

  return (
    <div style={{backgroundColor:"#FED100",height:"150px",width:"400px",position:"absolute",top:"250px"}}>
        <h1>Child Component 2</h1>
        <button
        onClick={() => handleChange("option2")}
        >option 2</button>
    </div>
  )
}

export default Child2