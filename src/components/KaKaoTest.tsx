import axios from 'axios'
import { useEffect, useState } from 'react'
import { apiInstance } from '../apis/setting'
import { useRouter } from 'next/router'
const KaKaoTest = () => {
    const router = useRouter()
    const [accessToken, setAccessToken] = useState({})
    useEffect(() => {
        if (!router.isReady) return
        const code = new URL(window.location.href).searchParams.get('code')
        const grant_type = 'authorization_code'
        const REST_API_KEY = `aec1459c80488d662071908fe414ca54`
        const REDIRECT_URI = `http://localhost:3000/kakaotest`
        axios
            .post(
                `https://kauth.kakao.com/oauth/token?grant_type=${grant_type}&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&code=${code}`,
                {
                    headers: {
                        'Content-type':
                            'application/x-www-form-urlencoded;charset=utf-8',
                    },
                }
            )
            .then((res) => {
                setAccessToken(res.data)
            })
            .catch((e) => {
                console.log(e)
            })
    }, [router.isReady])
    console.log(accessToken)

    return (
        <div>
            <p>AccessToken:{accessToken.access_token}</p>
            <p>RefreshToken:{accessToken.refresh_token}</p>
        </div>
    )
}
export default KaKaoTest

// axios
// .get(`https://kapi.kakao.com/v2/user/me`, {
//     headers: {
//         Authorization: `Bearer ${accessToken}`,
//         'Content-type':
//             'application/x-www-form-urlencoded;charset=utf-8',
//     },
// })
// .then((res) => {
//     console.log(res)
// })
// .catch((e) => {
//     console.log(e)
// })
