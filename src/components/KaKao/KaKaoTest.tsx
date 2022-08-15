import axios from 'axios'
import { useEffect, useState } from 'react'
import { apiInstance } from '../../apis/setting'
import { useRouter } from 'next/router'
import useKaKaoScript from '../../hooks/use-kakao-script'

const KaKaoTest = () => {
    const router = useRouter()
    const grant_type = 'authorization_code'
    const REST_API_KEY = `aec1459c80488d662071908fe414ca54`
    const REDIRECT_URI = `http://localhost:3000/kakaotest`
    const [accessToken, setAccessToken] = useState('')
    const [profile, setProfile] = useState({})
    const kakaoLogin = async () => {
        try {
            const code = new URL(window.location.href).searchParams.get('code')
            const response = await axios.post(
                `https://kauth.kakao.com/oauth/token?grant_type=${grant_type}&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&code=${code}`,
                {
                    headers: {
                        'Content-type':
                            'application/x-www-form-urlencoded;charset=utf-8',
                    },
                }
            )
            setAccessToken(response.data.access_token)
            console.log('in async:', accessToken)
        } catch (e) {
            console.log(e)
        }
    }
    const getKaKaoProfile = async () => {
        try {
            const getInfo = await axios.get(
                'https://kauth.kakao.com/oauth/v2/user/me',
                {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                        'Content-type':
                            'application/x-www-form-urlencoded;charset=utf-8',
                    },
                }
            )
            setProfile(getInfo)
            console.log(`getinfo:${profile}`)
        } catch (e) {
            console.log(e)
        }
    }
    useEffect(() => {
        kakaoLogin()
        console.log(`useeffect:${accessToken}`)
        getKaKaoProfile()
    }, [accessToken])
    console.log('out async:', accessToken)

    return (
        <div>
            <p>AccessToken:{accessToken}</p>
            <p>RefreshToken:{accessToken}</p>
        </div>
    )
}
export default KaKaoTest
