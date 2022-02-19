import React, {useRef} from 'react'

function UseRefExample1() {
    const inputRef = useRef()

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(inputRef.current.value)
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label htmlFor='name'>Name</label>
            <input type='text' id='name' ref={inputRef}  />
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default UseRefExample1