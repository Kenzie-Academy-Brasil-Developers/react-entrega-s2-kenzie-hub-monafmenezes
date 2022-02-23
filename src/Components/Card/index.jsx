import { Container, List } from "./style"

const Card = ({techs, advancedSchema=false, ...rest}) => {

    

    return(

        <Container advancedSchema={advancedSchema} {...rest}>

            {techs.map((tech) => (
                
                <List key={tech.title}>
                    <h2>{tech.title}</h2>
                    <span>{tech.title}</span>
                </List>
            ))}
        
        </Container>

    )
}

export default Card