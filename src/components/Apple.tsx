import { useState } from 'react'

const Apple = (props) => {
    //매개변수 가져오기
    const { color, fruit } = props

    // 변수 => 사용을 못한다.
    //let count = 0
    // react Hook
    const [count, setCount] = useState('')
    const handlerClick = (e) => {
        e.preventDefault()
        setCount(count + '가')
    }
    return (
        <>
            <p>Apple</p>
            <p>{color}</p>
            <button onClick={handlerClick}>test</button>
            <p>{fruit}</p>
            <p>{count}</p>
        </>
    )
}

export default Apple
