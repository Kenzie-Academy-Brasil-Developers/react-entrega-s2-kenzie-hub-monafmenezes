import { Card, Container, Content, Imagem } from "./style"
import Logo from "../../assets/Logo.svg"
import Button from '../../Components/Button'
import {colorprimarynegative, grey1, grey2, grey3} from '../../Styles/global'
import Input from '../../Components/Input'
import SelectStatus from "../../Components/Select"
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import api from '../../Services/api'
import { toast } from "react-toastify"
import { useHistory } from "react-router-dom"


const Register = ({authenticated}) => {
    const modulos = [
                "Primeiro módulo (Introdução ao Frontend)", 
                "Segundo módulo (Frontend Avançado)",
                "Terceiro módulo (Introdução ao Backend)",
                "Quarto módulo (Backend Avançado)"
    ]

    // const {id} = useParams()
    const schema = yup.object().shape({
        name: yup.string().required('Campo obrigatório'),
        email: yup.string().email('Email inválido').required('Campo obrigatório'),
        password: yup.string().min(6, 'mínimo 6 digitos').required('Campo obrigatório'),
        password_confirm: yup.string().oneOf([yup.ref('password'), 'Senhas diferentes']).required('Campo obrigatório'),
        course_module: yup.string().required('Campo obrigatório')
    })

    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schema)
    })

    const history = useHistory()

    const submit = ({name, email, password, course_module, bio='Lorem ipsum dolor emet', contact='"linkedin/in"'}) => {

        const user = {email, password, name, bio, contact, course_module}

        api.post('/users', user)
        .then((response) =>{
            toast.success('Sucesso ao criar a conta')
            history.push('/')
        })
        .catch((_) => {
            toast.error('Erro ao criar a conta, tente outro email')
        })
    
    }
    const handleLogin = () => {
        history.push('/')
    }

    // if(authenticated) {
    //     return <Redirect to={`/home/${id}`} />
    // }

    return(

        <Container>
            <Content>
                <Imagem src={Logo} /> 

                <Button 
                    height='25px'
                    heigthDesktop='32px'
                    widthMobile='79px' 
                    colorHover={grey2}
                    widthDesktop='79px'
                    color={grey3} 
                    onClick={handleLogin}
                >Voltar</Button>


            </Content>
            <Card>
                <h2>Crie sua conta</h2>
                <span>Rapido e grátis, vamos nessa</span>

                <form onSubmit={handleSubmit(submit)}>
                    <Input
                    label='Nome'
                    height='38px'
                    placeholder='Digite aqui seu nome'
                    register={register}
                    name='name'
                    error={errors.name?.message}

                    />

                    <Input 
                        label='Email'
                        height='38px'
                        placeholder='Digite aqui seu email'
                        register={register}
                        name='email'
                        error={errors.email?.message}
                    />

                    <Input 
                        label='Senha'
                        height='38px'
                        type='password'
                        placeholder='Digite aqui sua senha'
                        register={register}
                        name='password'
                        error={errors.password?.message}
                    />

                    <Input
                        label='Confirmar senha'
                        height='38px'
                        type='password'
                        placeholder='Confirme sua senha'
                        register={register}
                        name='password_confirm'
                        error={errors.password_confirm?.message}
                    />

                    <SelectStatus 
                        children='Selecionar módulo' 
                        status={modulos} register={register} 
                        name='course_module'  
                        error={errors.course_module?.message}
                        label='Selecionar módulo'
                    />

                    <Button
                        height='38px'
                        heigthDesktop='48px'
                        widthMobile='260px' 
                        colorHover={grey1}
                        widthDesktop='326px'
                        color={colorprimarynegative} 
                        type='submit'
                    
                    >Cadastrar</Button>

                </form>

                

            </Card>
        </Container>
        
    )
}

export default Register