import reactLogo from '../../assets/react.svg'

import "./BackReact.scss"

function BackReact() {
  const val = 30;

  const estilo = {
    animation: `logo-spin infinite ${val}s linear`
  }

  return (
    <>
      <div className='symbolContainer'>
        <div className='logoReact' target="_blank">
          <img src={reactLogo} className="logo react" style={estilo}  alt="React logo" />
        </div>
      </div>
    </>
  )
}

export default BackReact
