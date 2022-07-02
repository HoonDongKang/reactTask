import styled from 'styled-components'

export const Formcontainer = styled.form`
    margin: 20px;
    > fieldset {
        border: 1px solid;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        width: 300px;
        > label {
            display: block;
            margin: 10px;
            > input {
                margin-left: 20px;
            }
        }
        > legend {
            margin: 10px;
        }
        > input {
            width: 100%;
            border-radius: 10px;
            border: 1px;
        }
        > input:hover {
            background-color: #b9b5b5;
        }
    }
`
