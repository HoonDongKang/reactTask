import { useEffect, useState } from 'react'
import { apiInstance } from '../apis/setting'

const Test = () => {
    const [message, setMessage] = useState('')
    //Get Method
    useEffect(() => {
        const apiRequest = async () => {
            const response = await apiInstance.get('/basket/apple') // baseURL+'/'
            setMessage(response.data.body.message)
        }
        apiRequest()
    }, [])
    //Post Method
    const handleSubmit = async (e) => {
        e.preventDefault()
        await apiInstance.post('/signup', { count: 1 })
    }
    return (
        <>
            <p>test</p>
            <p>{message}</p>
            <form></form>
        </>
    )
}

export default Test
