import React, { useState } from 'react'
import Child from './Child'
import Child2 from './Child2'

const Parent = () => {

    const [selectedOption, setSelectedOption] = useState("")


  return (
    <div>
        <div style={{backgroundColor:"#73FF00",height:"500px",width:"500px",paddingLeft:"20px"}}>
          <h1>parent Component</h1>
          <Child value={setSelectedOption}/>
          <Child2 value={setSelectedOption}/>
          <p style={{position:"absolute",top:"400px"}}>Selected Option: {selectedOption}</p>
        </div>
    </div>
  )
}

export default Parent