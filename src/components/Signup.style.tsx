import styled from 'styled-components'

export const Formcontainer = styled.form`
    @import url('https://fonts.googleapis.com/css2?family=Roboto+Slab&display=swap');
    font-family: 'Roboto Slab', serif;
    margin: 100px 20px;
    border: 1px solid black;
    border-radius: 10px;
    height: 700px;
    display: flex;
    flex-direction: column;
    > div {
        flex: 1;
        display: flex;
        flex-direction: column;
        > p {
            margin: 50px 30px;
            font-weight: 700;
            font-size: xx-large;
        }
        > label {
            margin: 10px 20px;
            font-size: x-large;
            display: block;
            flex: 1;
        }
        > input {
            flex: 1;
        }
    }
`

export const PageDivcontainer = styled.div`
    display: flex;
    flex-direction: row;
    > .imgDiv {
        background-color: blue;
        flex: 2;
    }
    > .signUpDiv {
        flex: 1;
        background-color: red;
    }
`
