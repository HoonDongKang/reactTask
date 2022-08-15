import router from 'next/router'
const KaKaojs = () => {
    const kakao_login = () => {
        window.Kakao.Auth.login({
            success(authObj: any) {
                router.push('/kakaojs')
            },
            fail(err: any) {
                console.log(err)
            },
        })
    }
    const kakao_logout = () => {
        window.Kakao.API.request({
            url: '/v1/user/unlink',
            success: function (res) {
                alert('success: ' + JSON.stringify(res))
            },
            fail: function (err) {
                alert('fail: ' + JSON.stringify(err))
            },
        })
    }
    return (
        <div>
            <button onClick={kakao_login}>카톡 로그인</button>
            <button onClick={kakao_logout}>카톡 연결끊기</button>
        </div>
    )
}

export default KaKaojs
