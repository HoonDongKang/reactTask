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
    const [id_token, setId_token] = useState('')
    const [token_info, setToken_info] = useState({})
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
            setId_token(response.data.id_token)
            console.log('in async:', accessToken)
        } catch (e) {
            console.log(e)
        }
    }
    const giveId_token = async () => {
        try {
            const tokenInfo = await axios.post(
                'https://kauth.kakao.com/oauth/tokeninfo',
                { id_token: id_token },
                {
                    headers: {
                        'Content-type':
                            'application/x-www-form-urlencoded;charset=utf-8',
                    },
                }
            )
            setToken_info(tokenInfo)
            console.log(`in async tokenInfo: ${tokenInfo}`)
        } catch (e) {
            console.log(e)
        }
    }
    const getKaKaoProfile = async () => {
        try {
            const getInfo = await axios.get(
                'https://kapi.kakao.com/v2/user/me',
                {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                        'Content-type':
                            'application/x-www-form-urlencoded;charset=utf-8',
                    },
                }
            )
            setProfile(getInfo.data)
            console.log(`getinfo:${profile}`)
        } catch (e) {
            console.log(e)
        }
    }
    useEffect(() => {
        kakaoLogin()
        console.log(`useeffect:${accessToken}`)
        getKaKaoProfile() //cors block..
        giveId_token()
    }, [accessToken])
    console.log(`out async token_info:${token_info}`)
    console.log('out async:', accessToken)
    console.log('getinfo:', profile)

    return (
        <div>
            <p>AccessToken:{accessToken}</p>
            <p>id token:{id_token}</p>
        </div>
    )
}
export default KaKaoTest
