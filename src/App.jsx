import { useRef, useState } from 'react'
import "./sass/main.scss"
import Index from './Index/Index'
import Cursor from './Cursor/Cursor'
function App() {
  const cursorsRef = useRef(null);
  return (
    <>
      <Cursor cursorsRef={cursorsRef} />
      <Index cursorsRef={cursorsRef}/>
    </>
  )
}

export default App
