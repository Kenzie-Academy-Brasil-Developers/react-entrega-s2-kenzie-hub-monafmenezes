import { Card, Container, Imagem } from "./style"
import Logo from '../../assets/Logo.svg'
import Input from '../../Components/Input' 
import Buttom from '../../Components/Button'
import { FaEye } from 'react-icons/fa'
import {colorprimary, colorprimarynegative, grey1, grey2} from '../../Styles/global'
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { Redirect, useHistory } from "react-router-dom"
import api from '../../Services/api'
import { toast } from "react-toastify"

const Login = ({authenticated, setAuthenticated}) => {

    const schema = yup.object().shape({
        email: yup.string().email('Email inválido').required('Campo obrigatório'),
        password: yup.string().min(6, 'mínimo 6 digitos').required('Campo obrigatório')
    })

    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schema)
    })

    const history = useHistory()

    const submit = (data) => {
        api.post('/sessions', data)

        .then((response) =>{
            const {token} = response.data
            localStorage.setItem('@Kenziehub:token', JSON.stringify(token))
            setAuthenticated(true)
            toast.success('Sucesso ao efetuar login')
            return history.push('/home')
        })
        .catch((_) => {
            toast.error('Email ou senha inválidos')
        })
    
    }
    const handleRegister = () => {
        history.push('/register')
    }

    if(authenticated) {
        return <Redirect to='/home'/>
    }

    return(
       <Container>
           <Imagem src={Logo} />
           <Card onSubmit={handleSubmit(submit)}>
               <h2>Login</h2>
               <Input 
                    label='Email' 
                    placeholder='nome@email.com'
                    height='48px'
                    register={register}
                    name='email'
                    error={errors.email?.message}
                />

               <Input
                   
                    label='Senha'
                    type='password'
                    placeholder='Sua senha'
                    icon={FaEye}
                    register={register}
                    name='password'
                    error={errors.password?.message}
               />

                <Buttom 
                    height='38px'
                    heigthDesktop='48px'
                    widthMobile='259px' 
                    color={colorprimary}
                    colorHover={colorprimarynegative}
                    widthDesktop='324px'
                    type='submit'
                >Entrar</Buttom>

                <h5>Ainda não possui uma conta?</h5>
                
                <Buttom 
                    onClick={handleRegister}
                    height='38px'
                    heigthDesktop='48px'
                    widthMobile='259px' 
                    color={grey1}
                    colorHover={grey2}
                    widthDesktop='324px'
                >Cadastre-se</Buttom>


           </Card>
       </Container> 
    )
}

export default Login