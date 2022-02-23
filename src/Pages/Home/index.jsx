import { Redirect } from "react-router-dom"
import { Cards, Container, ContainerModal, Header, Main, Navbar } from "./style"
import Logo from '../../assets/Logo.svg'
import Card from "../../Components/Card"
import Button from '../../Components/Button'
import {grey2, grey3} from '../../Styles/global'
import { useHistory } from "react-router-dom"
import api from "../../Services/api"
import { useState } from "react"
import { useParams } from "react-router-dom"
import { useEffect } from "react"
import { toast } from "react-toastify"
import { useForm } from "react-hook-form"
import ModalTech from "../../Components/Modal"

const Home = ({id, authenticated, setAuthenticated}) => {

    const [user, setUser] = useState([])
    // const [tech, setTech] = useState([])
    // const {register, handleSubmit} = useForm()
    const [open, setOpen] = useState(false)


    const handleClose = () => {
        setOpen(false)
    }
    const history = useHistory()

    const loadTechs = () => {
        api.get(`users/${id}`)
        .then((response) => {   
             setUser(response.data)   
        }).catch((_) => toast.error('Algo deu errado!'))
    }

    useEffect(() => {
        loadTechs()
    }, [])


    const handleLogout = () => {
        localStorage.clear()
        setAuthenticated(false)
        history.push('/')
    }

    console.log(open)

   
    if(authenticated === false) {
        return <Redirect to='/'/>
    }

    return( 
        <>
            <ModalTech open={open} handleClose={handleClose} />
            <Container>

                

                <Navbar>
                    <img src={Logo} alt="Kenzie Hub" />
                    <Button
                        onClick={handleLogout}
                        height='32px'
                        widthMobile='55px' 
                        color={grey3}
                        colorHover={grey2}
                    >Sair</Button>
                

                </Navbar>

                <Header>

                    <h1>Olá, {user.name}</h1>
                    <span>{user.course_module}</span>

                </Header>

                <Main>
                    <ContainerModal>

                        <h2>Tecnologias</h2>
                        <Button
                            height='32px'
                            widthMobile='32px' 
                            color={grey3}
                            colorHover={grey2}
                            onClick={() => setOpen(true)}
                        >+</Button>

                    

                    </ContainerModal>
                    <Cards>
                        {user.techs > 0 && <Card techs={user.techs} />}    
                    </Cards>

                </Main>

            </Container>
        
        </>
    )
}


export default Home