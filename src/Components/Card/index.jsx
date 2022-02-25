import { Container, List } from "./style"
import Button from '../../Components/Button'

const Card = ({techs, advancedSchema=false, ...rest}) => {

    

    return(

        <Container advancedSchema={advancedSchema} {...rest}>

            {techs.map((tech) => (
                
                <List key={tech.title}>
                    <h2>{tech.title}</h2>
                    <Button>{tech.title}</Button>
                </List>
            ))}
        
        </Container>

    )
}

export default Card