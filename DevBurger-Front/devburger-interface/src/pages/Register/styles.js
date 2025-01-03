import styled from 'styled-components'
import BackgroundLogin from '../../assets/bg.svg'
import Background from '../../assets/Padrao.svg'

import { Link as ReactLink } from 'react-router-dom'


export const Container = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
`

export const LeftContainer = styled.div`
    background: url('${BackgroundLogin}');
    background-size: cover;
    background-position: center;

    height: 100%;
    width: 100%;
    max-width: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

        img {
            width: 80%;
        }

`

export const RightContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    height: 100%;
    width: 100%;
    max-width: 50%;

    background: url('${Background}');
    background-color: #1e1e1e;

    p{
        color: #fff;
        font-size: 18px;
        font-weight: 800;
        a{
            color: #9758a6;
        }
    }
`

export const Title = styled.h2`
  font-family: "Road Rage", sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 40px;
  color: #9758a6;     
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px;
    width: 100%;
    max-width: 400px;

    a {
        font-size: 16px;
        font-weight: 400;
        color: #fff;
        

    }
`

export const InputContainer = styled.div`
display: flex;
flex-direction: column;
gap: 5px;
width: 100%;

    input {
    width: 100%;
    border: none;
    height: 52px;
    border-radius: 5px;
    padding: 0 16px;
    }

    label {
    font-size: 18px;
    font-weight: 600;
    color: #fff;
    }

    p {
        font-size: 14px;
        line-height: 80%;
        color: #cf3057;
        font-weight: 600;
        height: 10px;

    }

`

export const Link = styled(ReactLink)`
    text-decoration: none;
    color: #fff;
`


