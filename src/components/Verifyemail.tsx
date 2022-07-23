import { useRouter } from 'next/router'

const Verifyemail = () => {
    const router = useRouter()
    const { email } = router.query

    return (
        <>
            <p>로그인이 되었다.</p>
            <p>당신의 이메일은 : {email}</p>
        </>
    )
}

export default Verifyemail
