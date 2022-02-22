import { Container } from "./style"

const Card = ({techs, advancedSchema=false, ...rest}) => {

    return(

        <Container advancedSchema={advancedSchema}>
            <h2>{techs.tittle}</h2>
            <span>{techs.status}</span>
        </Container>

    )
}

export default Card