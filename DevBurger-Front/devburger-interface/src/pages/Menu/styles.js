import styled from 'styled-components'
import BannerMenu from '../../assets/Banner-2.svg'





export const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    
`


export const Banner = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 415px;
    width: 100%;
    position: relative;
    
    background: url('${BannerMenu}'), no-repeat;
    background-position: center;
    background-size: cover;

    h1{
       font-family: 'Road Rage', sans-serif;
       font-size: 80px;
       line-height: 65px;
       color: #fff;
       position: absolute;
       right: 20%;
       top: 30%

    }

    span {
        display: block;
        color: #fff;
        font-size: 20px;
    }

`

export const CategoryMenu = styled.div`

`

export const ProductsContainer = styled.div`



`

