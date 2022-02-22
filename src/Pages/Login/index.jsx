import { Card, Container, Imagem } from "./style"
import Logo from '../../assets/Logo.svg'
import Input from '../../Components/Input' 
import Buttom from '../../Components/Button'
import { FaEye } from 'react-icons/fa'
import {colorprimary, colorprimarynegative, grey1, grey2} from '../../Styles/global'

const Login = () => {
    return(
       <Container>
           <Imagem src={Logo} />
           <Card>
               <h2>Login</h2>
               <Input 
                    label='Email' 
                    placeholder='nome@email.com'
                />

               <Input
                    label='Senha'
                    type='password'
                    placeholder='Sua senha'
                    icon={FaEye}
               />

                <Buttom 
                    widthMobile='259px' 
                    color={colorprimary}
                    colorHover={colorprimarynegative}
                    widthDesktop='324px'
                >Entrar</Buttom>

                <h5>Ainda não possui uma conta?</h5>
                <Buttom 
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