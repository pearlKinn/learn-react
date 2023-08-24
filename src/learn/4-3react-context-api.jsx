import { useState, createContext, useContext } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const AppContext = createContext();


function App() {
  const [count, setCount] = useState(0)
  const countUp = () => setCount(count + 1);

  const value = { count, countUp };

  return (
    <AppContext.Provider value={value}>
      <MyWrapper />
    </AppContext.Provider>
  )
}

function MyWrapper() {
  return (
    <div>
      <LinkList />
    </div>
  )
}

function LinkList() {
  return (
    <div className="LinkList">
      <Link to="http://vitejs.dev" image={viteLogo} label="vite" external />
      <Link to="https://react.dev" image={reactLogo} label="react" external />
    </div>
  )
}

function Link({ to, image, label, external = false }) {
  return (
    // <a href={to} target={external ? "_blank" : null}>
      <div>
        <Image src={image} alt={label} />
      </div>
    // </a>
  )
}

function Image({ src, alt }) {
  const value = useContext(AppContext);

  return (
    <>
      <img src={src} className="logo" alt={alt} />
      <button type="button" onClick={value.countUp}>{value.count}</button>
    </>
  )
}

export default App
