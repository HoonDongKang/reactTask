import { useEffect, useState } from 'react'
import { apiInstance } from '../apis/setting'

const Signup = () => {
    useEffect(() => {
        const postRequest = async () => {
            const response = await apiInstance.post('/signup', {
                id: {},
            })
        }
    })
}
