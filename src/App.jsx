import './App.css'
import { NavbarDemo } from './components/ui/Navbar'
import { TypewriterEffectSmoothDemo } from './components/ui/TypewriterEffect'
import { BackgroundLinesDemo } from './components/ui/BackgroundLines'
import { SmoothCursorDemo } from './components/ui/SmoothCursor'
import Snowfall from 'react-snowfall'
function App() {

  return (
    <>
    <div className="cursor-none">
    <SmoothCursorDemo />
    </div>
      <NavbarDemo>
        <BackgroundLinesDemo>
          <TypewriterEffectSmoothDemo />
        </BackgroundLinesDemo>
      </NavbarDemo>
    </>
  )
}

export default App
