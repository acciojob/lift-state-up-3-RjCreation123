import React from 'react'

const Child = ({value}) => {

  const handleChange = (e) => {
    value(e);
  };

  return (
    <div style={{backgroundColor:"#CD5B19",height:"150px",width:"400px",position:"absolute",top:"120px"}}>
        <h1>Child Component 1</h1>
        <button
        onClick={() => handleChange("option1")}
        >option 1</button>
    </div>
  )
}

export default Child