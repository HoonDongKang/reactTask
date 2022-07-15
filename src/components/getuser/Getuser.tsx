import { useEffect, useState } from 'react'
import { apiInstance } from '../../apis/setting'

const Getuser = () => {
    const [userNum, setUserNum] = useState('')
    const numHandler = (e) => {
        setUserNum(e.target.value)
    }

    const GetUserInfo = (userNum: string) => {
        const [message, setMessage] = useState([])
        useEffect(() => {
            const getRequest = async () => {
                const userIdx = userNum
                const response = await apiInstance.get(`/${userIdx}`)
                setMessage(response.data)
            }
            getRequest()
        }, [userNum])
        return (
            <div>
                {message.map((messageObj) => {
                    return (
                        <div key={messageObj.idx}>
                            <p>idx: {messageObj.idx}</p>
                            <p>id: {messageObj.id}</p>
                            <p>pw: {messageObj.pw}</p>
                            <p>name: {messageObj.name}</p>
                            <p>age: {messageObj.age}</p>
                            <p>country: {messageObj.country}</p>
                        </div>
                    )
                })}
            </div>
        )
    }

    const submit = (e) => {
        e.preventDefault()
        console.log(e.target)
    }
    //버튼 눌러서 동작하는 로직을 짜고싶음..

    return (
        <>
            <form>
                <input
                    type='text'
                    value={userNum}
                    name='userNum'
                    onChange={numHandler}
                />
                <input type='submit' onClick={submit} />
            </form>
            {GetUserInfo(userNum)}
        </>
    )
}
export default Getuser
