import GOOGLE from '../../configs/social'
const { GOOGLE_CLIENT_KEY, GOOGLE_REDIRECT_URI } = GOOGLE

const GoogleLogin = () => {
    const GOOGLE = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${GOOGLE_CLIENT_KEY}&redirect_uri=${GOOGLE_REDIRECT_URI}&response_type=code&scope=openid https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile`

    const handleLogin = () => {
        window.location.href = GOOGLE
    }
    return <button onClick={handleLogin}>구글 로그인</button>
}

export default GoogleLogin
