import { useEffect, useState } from 'react'

import { Container, Title} from './styles.js'
import CardProduct from '../CardProduct'

import formatPrice from '../../utils/FormatPrice'

import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'


import  api  from '../../services/api'




function OffersCarousel(){
    const [offers, setOffers] = useState([])

    useEffect( () => {
       async function loadProducts(){
        const { data } = await api.get('/products')

        const onlyOffers = data.filter( product => product.offer).map( product => (
            {currencyValue: formatPrice(product.price), 
            ...product
        
        })) // ou === true

        setOffers(onlyOffers)
       }

       loadProducts()
    }, [])

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000},
            items: 4
        },
        desktop: {
            breakpoint: { max: 3000, min: 1200},
            items: 4
        },
        tablet: {
            breakpoint: { max: 1280, min: 690},
            items: 3
        },
        mobile: {
            breakpoint: { max: 690, min: 0},
            items: 2
        }
    }

    return (
        <Container>
            <Title>Ofertas do dia</Title>

            <Carousel
                responsive={responsive}
                infinite={true}
                partialVisbile={false}
                itemClass='carousel-item'
            >
                {offers.map( (product) => (
                    <CardProduct key={product.id} product={product}/>
                ))}
             </Carousel>
        </Container>


    )
}


export default OffersCarousel