import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Main from './components/main.jsx'
import End from './components/end.jsx'
import Slider from './components/slider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <>
      <div className="App">
        <Slider />
        <Main />
      </div>
    </>

    <End />

  </StrictMode>,
)
