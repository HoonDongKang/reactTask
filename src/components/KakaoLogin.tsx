const KaKaoLogin = () => {
    const REST_API_KEY = `aec1459c80488d662071908fe414ca54`
    const REDIRECT_URI = `http://localhost:3000/kakaotest`
    const KAKAO_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`
    const handleLogin = () => {
        window.location.href = KAKAO_URL
    }
    return <button onClick={handleLogin}>카카오톡 로그인</button>
}

export default KaKaoLogin
