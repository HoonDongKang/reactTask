import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { apiInstance } from '../apis/setting'

const Verifyemail = () => {
    const router = useRouter()
    const { pid, key, email } = router.query
    console.log(router)
    const [verification, setVerification] = useState({
        success: false,
        isVerified: false,
    })
    useEffect(() => {
        if (!router.isReady) return //useRouter 처음부터 pid 못 가져오기 때문에 params 확인해야함.
        const getRequest = async () => {
            try {
                const response = await apiInstance.get(`/verify/${pid}`, {
                    params: { key: key },
                })

                //axios 수정
                setVerification({ isVerified: response.data, success: true })
            } catch (e) {
                setVerification({ success: true, isVerified: false })
            }
        }
        getRequest()
    }, [router.isReady])

    if (verification.isVerified) {
        return (
            <>
                <p>로그인이 되었다.</p>
                <p>당신의 idx : {pid}</p>
                <p>당신의 이메일은 : {email}</p>
                <p>당신의 코드는: {key}</p>
            </>
        )
    } else if (verification.success) {
        return (
            <>
                <p>인증에 실패하셨습니다.</p>
            </>
        )
    } else {
        return (
            <>
                <p>로딩중입니다.</p>
            </>
        )
    }
}

export default Verifyemail
