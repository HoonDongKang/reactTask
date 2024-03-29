import axios from 'axios'
import { useEffect, useState } from 'react'
import GOOGLE from '../../configs/social'
const { GOOGLE_CLIENT_KEY, GOOGLE_REDIRECT_URI, GOOGLE_CLIENT_PASSWORD } =
    GOOGLE

const GoogleInfo = () => {
    const [code, setCode] = useState('')
    const [accessToken, setAccessToken] = useState('')
    const [user_info, setUser_info] = useState('')

    const getAccessToken = async () => {
        try {
            const code = new URL(window.location.href).searchParams.get('code')
            const response = await axios.post(
                'https://oauth2.googleapis.com/token',
                null,
                {
                    headers: {
                        'Content-type':
                            'application/x-www-form-urlencoded;charset=utf-8',
                    },
                    params: {
                        code: code,
                        client_id: GOOGLE_CLIENT_KEY,
                        client_secret: GOOGLE_CLIENT_PASSWORD,
                        grant_type: 'authorization_code',
                        redirect_uri: GOOGLE_REDIRECT_URI,
                    },
                }
            )

            console.log(response)
            setCode(code)
            setAccessToken(response.data.access_token)
        } catch (e) {
            console.log(e)
        }
    }

    const getUserInfo = async () => {
        try {
            const response = await axios.get(
                'https://www.googleapis.com/oauth2/v2/userinfo',
                {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                        'Content-type':
                            'application/x-www-form-urlencoded;charset=utf-8',
                    },
                }
            )
            console.log(response)
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        getAccessToken()
        getUserInfo()
    }, [code])
    return <div>code:{code}</div>
}

export default GoogleInfo
