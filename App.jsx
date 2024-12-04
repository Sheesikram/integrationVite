import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
function App() {
  const [count, setCount] = useState(0)
  const [product, setName] = useState([])

  useEffect(() => {

    axios.get('/api/products')//cors error as port is diffrent or url is different so use proxy
      .then((response) => {
        console.log(response.data)
        setName(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  })

  return (
    <>

      <h1>Shees Ikram</h1>
      <p>product:{product.length}</p>
      {
        product.map((product, index) => (//change the parenthesis because we are not returning anything so use ()
          <div key={product.id}>
            <h1>{product.name}</h1>
            
          </div>
        ))}
      <div className="card">
        <button onClick={() => setCount((count) => count + 101)}>
          count is {count}
        </button>

      </div>

    </>
  )
}

export default App
