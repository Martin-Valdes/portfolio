import React, {useState} from 'react'

const Acelerator = (props) => {

    const [buttonUp, setButtonUp] = useState(30);

    const sendData = () =>{

        setButtonUp(buttonUp - 1)
        props.enviarDatos(buttonUp)
    }
    
  return (
    <div>
       <button onClick={sendData}  >MAS</button>
    </div>
  )
}

export default Acelerator
