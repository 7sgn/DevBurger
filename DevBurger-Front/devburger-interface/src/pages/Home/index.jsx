import { Banner, Container, Content} from './styles'
import CategoriesCarousel from '../../components/CategoriesCarousel'



export function Home() {



    return(
        <main>
            <Banner>
                <h1>Bem vindo(a)!</h1>
            </Banner>
            <Container>
                <Content>
                    <CategoriesCarousel />
                    <div>Carrosel de Produtos</div>
                </Content>
            </Container>
        </main>
    )
}

