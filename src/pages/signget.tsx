import { useEffect, useState } from 'react'
import { apiInstance } from '../apis/setting'

const Signup = ({}) => {
    const [message, setMessage] = useState('')
    useEffect(() => {
        const getRequest = async () => {
            const response = await apiInstance.get('/')
            setMessage(JSON.stringify(response.data))
        }
        getRequest()
    }, [])

    return (
        <>
            <p>test</p>
            <p>{message}</p>
        </>
    )
}

export default Signup
