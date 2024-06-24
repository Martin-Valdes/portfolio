import React, {useState} from 'react';
import reactLogo from '../../assets/react.svg'
import Acelerator from '../acelerator/Acelerator';
import "./BackReact.scss"
import BackVideo from '../backVideo/BackVideo';

function BackReact() {
  
  const [memo, setMemo] = useState(30)

  const estilo = ( data) => {
    setMemo(data)
  }
  const value = {
    animation: `logo-spin infinite ${memo}s linear`
  }
  return (
    <>
      <div className='symbolContainer'>
        <Acelerator enviarDatos={estilo}/>
        <div className='logoReact' target="_blank">
          <img src={reactLogo} className="logo react" style={value} alt="React logo" />
        </div>
      </div>
    </>
  )
}

export default BackReact
