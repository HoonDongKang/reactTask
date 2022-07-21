import { useState, useEffect } from 'react'
import { apiInstance } from './../apis/setting'
const Verifyemail = () => {
    const [email, setEmail] = useState([])
    const emailtest = 'd159123@naver.com'
    useEffect(() => {
        const getRequest = async () => {
            const response = await apiInstance.get(`/mail/${emailtest}`)
            setEmail(response.data)
            console.log(response)
        }
        getRequest()
    }, [])
    return (
        <>
            <p>로그인이 되었다.</p>
        </>
    )
}

export default Verifyemail
