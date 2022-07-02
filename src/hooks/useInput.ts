import { ChangeEvent, useState } from 'react'

const useInput = (initialValues) => {
    const [values, setValues] = useState(initialValues)
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setValues({ ...values, [name]: value })
    }
    return [values, onChange]
}

export default useInput
