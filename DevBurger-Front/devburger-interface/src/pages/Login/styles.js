import styled from 'styled-components'
import BackgroundLogin from '../../assets/bg.svg'
import Background from '../../assets/Padrao.svg'

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
            cursor: pointer;
            color: #9758a6;
        }
    }
`

export const Title = styled.h2`
  font-family: "Road Rage", sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 40px;
  color: #fff;
  span{
    color: #9758a6;
  }      

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
        cursor: pointer;

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
`

export const Button = styled.button`
    width: 100%;
    height: 52px;
    border-radius: 5px;
    padding: 0 16px;
    color: #fff;
    background-color: #9758a6 ;
    font-weight: 400;
    font-size: 18px;
    border: none;
`