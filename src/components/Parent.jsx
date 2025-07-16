import React from 'react'

const Parent = () => {

    const [selectedOption, setSelectedOption] = useState("Option1")
  return (
    <div>
        <div style={{backgroundColor:"grey",height:"100px",width:"100px"}}>
          <h1>parent Component</h1>
        </div>
    </div>
  )
}

export default Parent