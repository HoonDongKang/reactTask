import useInput from '../../hooks/useInput'
import { Formcontainer, PageDivcontainer } from './Signup.style'
import { toast } from 'react-toastify'
import { useState } from 'react'
import { apiInstance } from '../../apis/setting'
import { idJ, pwJ, nameJ } from '../../signupLogic'
import TitleInput from './TitleInput'
import { IdInput, PwInput } from './IdPwInput'
import NameInput from './NameInput'
import AgeInput from './AgeInput'
import CountryInput from './CountryInput'
import CheckInput from './CheckInput'
import BtnInput from './BtnInput'

const Signup = () => {
    //Text input type
    const [input, setInputs] = useInput({
        id: '',
        pw: '',
        name: '',
        age: '',
    })

    //Checkbox input type
    const [checked, setChecked] = useState('')
    const checkedHandle = (e) => {
        setChecked(e.target.checked)
    }
    //Select type
    const [country, setCountry] = useState('')
    const countryHandler = (e) => {
        setCountry(e.target.value)
    }

    //Submit rules
    const blankCheck =
        input.name != '' && input.id != '' && input.pw != '' && input.age != ''
            ? false
            : true
    const countryCheck =
        country === '============ Country List ============' || country === ''
            ? true
            : false
    const agreeCheck = Boolean(checked) === false ? true : false

    let registerRule = ''
    const idCheck = input.id.match(idJ) === null ? true : false
    const nameCheck = input.name.match(nameJ) === null ? true : false
    const pwCheck = input.pw.match(pwJ) === null ? true : false

    //Submit function
    const submit = async (e) => {
        e.preventDefault()

        if (blankCheck) {
            toast.error('Please fill all blanks')
        } else if (countryCheck) {
            toast.error('Please choose country')
        } else if (agreeCheck) {
            toast.error('Please check the agreement')
        } else if (idCheck) {
            toast.error('※아이디 에러 !!')
            toast.error(
                (registerRule =
                    '아이디는 영어 소문자 또는 숫자 최소 4자에서 12자까지 가능합니다.')
            )
        } else if (pwCheck) {
            toast.error('※비밀번호 에러 !!')
            toast.error(
                (registerRule =
                    '비밀번호는 영어 소문자 또는 대문자 또는 숫자를 포함하여 최소 4자에서 12자까지 가능합니다.')
            )
        } else if (nameCheck) {
            toast.error('※이름 에러 !!')
            toast.error(
                (registerRule = '한국어 최소 2자에서 6자까지 가능합니다.')
            )
        } else {
            await apiInstance
                .post('/', {
                    id: input.id,
                    pw: input.pw,
                    name: input.name,
                    age: input.age,
                    country: country,
                })
                .then(() => {
                    toast(`Welcome ${input.name} ~!`)
                    toast(`go to '/signget' to check your info!`)
                })
                .catch(() => {
                    toast('fail to post info.')
                })
        }
    }
    //input components 나누기
    return (
        <>
            <PageDivcontainer>
                <div className='imgDiv'>
                    <img src='dog.jpg' alt='dog'></img>
                </div>
                <div className='signUpDiv'>
                    <Formcontainer>
                        <TitleInput />
                        <IdInput value={input.id} onChange={setInputs} />
                        <PwInput value={input.pw} onChange={setInputs} />
                        <NameInput value={input.name} onChange={setInputs} />
                        <AgeInput value={input.age} onChange={setInputs} />
                        <CountryInput
                            value={country}
                            onChange={countryHandler}
                        />
                        <CheckInput onChange={checkedHandle} value={checked} />
                        <BtnInput onClick={submit} />
                    </Formcontainer>
                </div>
            </PageDivcontainer>
        </>
    )
}

export default Signup
