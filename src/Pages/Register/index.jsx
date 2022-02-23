import { Card, Container, Content, Imagem } from "./style"
import Logo from "../../assets/Logo.svg"
import Button from '../../Components/Button'
import {colorprimarynegative, grey1, grey2, grey3} from '../../Styles/global'
import Input from '../../Components/Input'

const Register = () => {

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
                >Enviar</Button>


            </Content>
            <Card>
                <h2>Crie sua conta</h2>
                <span>Rapido e grátis, vamos nessa</span>

                <Input
                label='Nome'
                height='38px'
                placeholder='Digite aqui seu nome'
                />

                <Input 
                    label='Email'
                    height='38px'
                    placeholder='Digite aqui seu email'
                />

                <Input 
                    label='Senha'
                    height='38px'
                    type='password'
                    placeholder='Digite aqui sua senha'
                />

                <Input
                    label='Confirmar senha'
                    height='38px'
                    type='password'
                    placeholder='Confirme sua senha'
                />

                <Button
                    height='38px'
                    heigthDesktop='48px'
                    widthMobile='260px' 
                    colorHover={grey1}
                    widthDesktop='326px'
                    color={colorprimarynegative} 
                
                >Cadastrar</Button>
                

            </Card>
        </Container>
        
    )
}

export default Register