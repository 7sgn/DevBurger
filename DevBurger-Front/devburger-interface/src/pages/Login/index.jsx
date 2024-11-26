import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { Container, LeftContainer, RightContainer, Title, Form, InputContainer } from './styles'
import { Button } from '../../components/Button'
import Logo from '../../assets/Logo.svg'


function Login() {

    const schema = yup
        .object({
            email: yup.string()
                .email('Digite um email válido')
                .required('O e-mail é obrigatório'),
            password: yup.string()
                .min(6, 'A senha deve conter pelo menos 6 caracteres')
                .required('Digite uma senha')
        })
        .required()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    })

    console.log(errors)

    const onSubmit = (data) => console.log(data)

    return (
        <Container>
            <LeftContainer>
                <img src={Logo} alt='logo-devburger' />
            </LeftContainer>
            <RightContainer>
                <Title>
                    Olá, seja bem vindo ao <span>Dev Burguer!</span>
                    <br />
                    Acesse com seu <span>Login e senha</span>.
                </Title>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <InputContainer>

                        <label>Email</label>
                        <input type='email' {...register("email")} />
                        <p>{errors.email?.message}</p>
                        
                    </InputContainer>

                    <InputContainer>

                        <label>Senha</label>
                        <input type='password' {...register("password")} />
                        <p>{errors.password?.message}</p>

                    </InputContainer>
                    <a>Esqueci minha senha</a>
                    <Button type="submit">Entrar</Button>
                </Form>
                <p>
                    Não possui conta? <a>Clique aqui</a>
                </p>
            </RightContainer>
        </Container>
    )
}

export default Login

/* Elvis operator */