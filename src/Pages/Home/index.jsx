import { Redirect } from "react-router-dom"
import { Cards, Container, ContainerModal, Header, Main, Navbar } from "./style"
import Logo from '../../assets/Logo.svg'
import Card from "../../Components/Card"
import Button from '../../Components/Button'
import {grey2, grey3} from '../../Styles/global'
import { useHistory } from "react-router-dom"
import api from "../../Services/api"
import { useState } from "react"
import { useEffect } from "react"
import { toast } from "react-toastify"
import ModalTech from "../../Components/Modal"
import ModalStatus from '../../Components/ModalStatus'

const Home = ({id, authenticated, setAuthenticated, token}) => {

    const [user, setUser] = useState({})
    const [tech, setTech] = useState({})
    const [open, setOpen] = useState(false)
    const [openStatus, setOpenStatus] = useState(false)
    const [techs, setTechs] = useState([])

 
    const handleClose = () => {
        setOpen(false)
    }

    const handleStatus = () => {
        setOpenStatus(false)
    }


    const history = useHistory()

    const loadUserInfor = () => {
        api.get(`users/${id}`)

        .then((response) => {   
            setTechs(response.data.techs)
            setUser(response.data) 

        }).catch((_) => toast.error('Algo deu errado!'))

    }


    const loadTechs = () => {
        api.get(`users/${id}`)

        .then((response) => {   
            setTechs(response.data.techs)
           
        }).catch((_) => toast.error('Algo deu errado!'))

    }

    useEffect(() => {
        loadUserInfor()
    }, [])


    const handleLogout = () => {
        setAuthenticated(false)
        localStorage.clear()
        history.push('/')
    }



   
    if(authenticated === false) {
        return <Redirect to='/'/>
    }

    return( 
        
        <>
        {console.log(tech)}
            <ModalTech 
                children='Cadastrar Tecnologia'     
                open={open} 
                handleClose={handleClose}
                titulo='Cadastrar Tecnologia'   
                token={token} 
                loadTechs={loadTechs}

            />

            <ModalStatus
                open={openStatus}
                handleClose={handleStatus}
                token={token} 
                techs={techs}
                loadTechs={loadTechs}
                tech={tech}
            
            />

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
                    <Cards onClick={() => handleLogout} >
                        {user.techs !== undefined  && <Card techs={techs} setTech={setTech} setOpenStatus={setOpenStatus} />}    
                    </Cards>

                </Main>

            </Container>
        
        </>
    )
}


export default Home