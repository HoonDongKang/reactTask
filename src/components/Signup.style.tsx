import styled from 'styled-components'

export const Formcontainer = styled.form`
    @import url('https://fonts.googleapis.com/css2?family=Roboto+Slab&display=swap');
    font-family: 'Roboto Slab', serif;
    margin: 40px 40px;
    border: 1px solid black;
    border-radius: 10px;
    height: 1000px;
    width: 400px;
    display: flex;
    flex-direction: column;
    > div {
        flex: 1;
        display: flex;
        flex-direction: column;
        > p {
            margin: 50px 30px 0px 30px;
            font-weight: 700;
            font-size: 25px;
            > .aTag {
                font-size: 30px;
                color: #0e73cc;
                text-decoration: none;
            }
        }
        > span {
            font-size: 15px;
            color: #616161;
            margin: 20px 30px;
        }
        > label {
            margin: 10px 20px;
            font-size: 18px;
            display: block;
            flex: 1;
        }
        > input {
            height: 30px;
            margin: 10px 30px 50px 30px;
            width: 300px;
            border: 1px solid #c1c1c1;
            background-color: #fafafa;
            border-radius: 3px;
        }
        > input[type='number']::-webkit-outer-spin-button,
        > input[type='number']::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
        }
        > input:hover {
            border-bottom: 2px solid #a8a8a8;
        }
        > select {
            width: 300px;
            height: 30px;
            margin: 10px 30px 50px 30px;
            background-color: #fafafa;
            border: 1px solid #c1c1c1;
        }
        > select:hover {
            background-color: #e7e5e5ec;
        }
    }
    > .policyTag {
        margin-left: 30px;
        font-size: 15px;
        > input {
            margin-right: 14px;
        }
    }
    > .signUpTag {
        display: flex;
        flex-direction: column;
        flex: 1;
        > input {
            margin: 20px auto;
            width: 300px;
            height: 30px;
            background-color: #2b2b2b;
            color: #fafafa;
            border-radius: 9px;
        }
        > input:hover {
            background-color: #161616;
            cursor: pointer;
        }
        > button {
            display: flex;
            width: 300px;
            align-items: center;
            justify-content: center;
            margin: 30px auto;
            font-weight: 700;
            background-color: #fafafa;
            border-radius: 9px;
            border: 1px solid #c1c1c1;
            height: 30px;
        }
        > button:hover {
            background-color: #e7e5e5ec;
            cursor: pointer;
        }
    }
`

export const PageDivcontainer = styled.div`
    display: flex;
    flex-direction: row;
    > .imgDiv {
        flex: 2;
        border-right: 1px solid black;
        > img {
            width: 400px;
            height: 600px;
            object-fit: cover;
            margin: 200px;
            margin-left: 300px;
        }
    }
    > .signUpDiv {
        flex: 1;
    }
`
