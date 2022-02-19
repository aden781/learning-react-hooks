import React, {useState, useEffect, useRef} from 'react'

function Todo() {
    const [loading, setLoading] = useState(true)
    const [todo, setTodo] = useState({})

    const isMounted = useRef(true)

    useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then((data) => {
        setTimeout(() => {
            if(isMounted.current) {
                setTodo(data)
                setLoading(false)
            }
        }, 3000)
    })
    return (() => {
        isMounted.current = false
    })
    }, [isMounted])
  return loading ? <p>Loading</p> : <h1>{todo.title}</h1>
}

export default Todo