const GoogleLogin = () => {
    const GOOGLE = `https://accounts.google.com/o/oauth2/v2/auth?client_id=1026000708652-vt8frn18sr28955acvdcg40sarbqa6ig.apps.googleusercontent.com&redirect_uri=http://localhost:3000/googleinfo&response_type=code&scope=openid https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile`

    const handleLogin = () => {
        window.location.href = GOOGLE
    }
    return <button onClick={handleLogin}>구글 로그인</button>
}

export default GoogleLogin
