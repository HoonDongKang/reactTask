import KAKAO from '../../configs/social'
const { KAKAO_REDIRECT_URI, KAKAO_REST_API_KEY } = KAKAO
const KaKaoLogin = () => {
    const KAKAO_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_REST_API_KEY}&redirect_uri=${KAKAO_REDIRECT_URI}&response_type=code`
    const handleLogin = () => {
        window.location.href = KAKAO_URL
    }
    return <button onClick={handleLogin}>카카오톡 로그인</button>
}

export default KaKaoLogin
