import React, {useState, useEffect, useRef} from 'react'
import { render } from 'react-dom'

function UseRefExample2() {
    const [name, setName] = useState('')
    const renders = useRef(1)
    const prevName = useRef()

    useEffect(() => {
        renders.current = renders.current + 1
        prevName.current = name
    }, [name])


  return (
    <div>
        <div>Renders: {renders.current} </div>
        <h2>Old Value: {prevName.current}</h2>
        <input type="text" value={name} onChange={(e) => setName(e.target.value) } />
    </div>
  )
}

export default UseRefExample2