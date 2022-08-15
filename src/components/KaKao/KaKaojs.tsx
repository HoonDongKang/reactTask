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
    //sdk logout
    const kakao_quit = () => {
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

    const kakao_info = () => {
        window.Kakao.Auth.createLoginButton({
            container: '#kakao-login-btn',
            success: function (authObj) {
                window.Kakao.API.request({
                    url: '/v2/user/me',
                    success: function (res) {
                        alert(JSON.stringify(res))
                    },
                    fail: function (error) {
                        alert(
                            'login success, but failed to request user information: ' +
                                JSON.stringify(error)
                        )
                    },
                })
            },
            fail: function (err) {
                alert('failed to login: ' + JSON.stringify(err))
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
            <button onClick={kakao_quit}>카톡 연결끊기</button>
            <a id='kakao-login-btn' onClick={kakao_info}>
                카톡 프로필
            </a>
            <button onClick={kakao_logout}>로그아웃</button>
        </div>
    )
}

export default KaKaojs
