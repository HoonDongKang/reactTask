import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { apiInstance } from '../apis/setting'

const Verifyemail = () => {
    const router = useRouter()
    const { pid, key, email } = router.query

    const [verification, setVerification] = useState(false)
    useEffect(() => {
        const getRequest = async () => {
            const response = await apiInstance.get('/verify', {
                params: {
                    idx: pid,
                    email: email,
                    emailCode: key,
                },
            })
            //axios 수정
            setVerification(response.data)
        }
        getRequest()
    }, [])
    return (
        <>
            <p>로그인이 되었다.</p>
            <p>당신의 idx : {pid}</p>
            <p>당신의 이메일은 : {email}</p>
            <p>당신의 코드는: {key}</p>
        </>
    )
}

export default Verifyemail
