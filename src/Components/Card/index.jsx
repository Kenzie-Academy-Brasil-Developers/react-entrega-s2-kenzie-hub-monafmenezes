import { Container, List } from "./style"

const Card = ({techs, setTech, advancedSchema=false, setOpenStatus,  ...rest}) => {

    const submit = (tech) =>{
        setTech(tech)
        setOpenStatus(true)
    }
    
    return(

        <Container advancedSchema={advancedSchema} {...rest}>
            {techs.map((tech) => (
                
                <List key={tech.title}>
                    <h2>{tech.title}</h2>
                    <button onClick={ () =>submit(tech)}>{tech.status}</button>
                </List>
            ))}
        </Container>

    )
}

export default Card