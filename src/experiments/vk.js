import React, {useState} from 'react'

const VK = () => {
  const [strokeDashArray, setStrokeDashArray] = useState(0)
  const [strokeDashOffset, setStrokeDashOffset] = useState(0)

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-around',
      height: '100%',
      width: '100%',
      padding: '40px'
    }}>
      <svg viewBox="0 0 64 64">
        <g>
          <path
            fill="transparent"
            stroke="black"
            strokeWidth={2}
            strokeMiterlimit={10}
            strokeDasharray={strokeDashArray}
            strokeDashoffset={strokeDashOffset}
            d="M50.51,33.68l9.37-15.07a.79.79,0,0,0-.67-1.21H48.83a2.73,2.73,0,0,0-2.32,1.29L38.63,31.36H37.19V17.2a.58.58,0,0,0-.58-.58H24a.43.43,0,0,0-.36.65l2.07,3.39v11c-3.61-.17-8.31-8.88-10.72-14a.55.55,0,0,0-.51-.32H4.59a.58.58,0,0,0-.55.77C7.44,27.51,15.05,40,23,45.85a8.16,8.16,0,0,0,4.84,1.53h9.37V40.66l1.46-1.25L46.21,47a1.19,1.19,0,0,0,.85.35h9.77A3.06,3.06,0,0,0,59,43.16 Z">
          </path>
        </g>
      </svg>
      <div>
        <h2>Settings</h2>
        <div>
          <h3>Stroke dash-array: <span style={{ minWidth: '60px', display: 'inline-block' }}>{strokeDashArray}</span></h3>
          <input type="range" min={0} max={500} step={0.5}
                 onChange={e => setStrokeDashArray(e.target.value)}
                 value={strokeDashArray}/>
        </div>
        <div>
          <h3>Stroke dash-offset: <span style={{ minWidth: '60px', display: 'inline-block' }}>{strokeDashOffset}</span></h3>
          <input type="range" min={-40} max={200} step={0.5}
                 onChange={e => setStrokeDashOffset(e.target.value)}
                 value={strokeDashOffset}/>
        </div>
      </div>
    </div>
  )
}

export default VK
