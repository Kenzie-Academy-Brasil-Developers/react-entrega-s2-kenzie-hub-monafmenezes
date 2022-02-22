import { Container } from "./styles"

const Button = ({children, color, whidtMobile, ...rest}) => {

    return (
        <Container 
            color={color}  
            whidtMobile={whidtMobile}
            {...rest}    
        >{children}</Container>
    )
}

export default Button