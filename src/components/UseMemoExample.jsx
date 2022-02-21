import React, {useState, useEffect, useRef, useMemo} from 'react'
import { render } from 'react-dom'

function UseMemoExample() {
    const [number, setNumber] = useState(1)
    const [inc, setInc] = useState(0)

    const renders = useRef(1)

    function getSqrt(n) {
        for (let i = 0; i < 1000; i++) {
            console.log(i)
        }
        console.log('Expensive Function')
        return Math.sqrt(n)
    }

    const sqrt = useMemo(() => getSqrt(number), [number])

    useEffect(() => {
        renders.current = renders.current + 1
    },)

    const onClick = () => {
        setInc((prevState) => {
            console.log(prevState + 1)
            return prevState + 1
        })
    }

  return (
    <div>
        <input type="number" value={number} onChange={(e) => setNumber(e.target.value)} />
        <p>Renders: {renders.current}</p>
        <h2>The sqrt of {number} is {sqrt}</h2>
        <button onClick={onClick}>Render</button>
    </div>
  )
}



export default UseMemoExample