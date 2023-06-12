import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Registration from './component/registrations'

const style = {
  background: '#563D7C',
  color: '#95C1F3',
  fontWeight: 'bold',
  width: '50%',
  margin: 'auto',
  padding: '0.6rem',
  textAlign: 'center'
}

function App() {
  return (
    <div className="p-3">
      <div style={style}>
        <h1 style={{ color: 'white' }}>N B T I</h1>
        <small>Nishi Banu To Islam</small>
      </div>
      {/* Student Registration */}
      <Registration />
    </div>
  )
}

export default App
