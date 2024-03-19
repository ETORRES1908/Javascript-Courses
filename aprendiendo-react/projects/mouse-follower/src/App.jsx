import { useEffect, useState } from "react"
import { FollowMouse } from "./components/FollowMouse.jsx"

function App() {
  const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState({x: 0 , y: 0})
  
  useEffect(() => {
    const handleMove = (event) => {
      const { clientX, clientY } = event
      setPosition({x: clientX, y: clientY})
    }
    if (enabled) {
      window.addEventListener('pointermove', handleMove)
    }
    return () => {
      window.removeEventListener('pointermove', handleMove)
    }
  }, [enabled])

  return (
    <main>
      <FollowMouse position={position} enabledStatus={enabled} toggleEnabled={setEnabled}></FollowMouse>
    </main>
  )
}

export default App
