import { Container } from "./styles"

const Button = ({children, color, whidthMobile, ...rest}) => {

    return (
        <Container 
            color={color}  
            whidtMobile={whidthMobile}
            {...rest}    
        >{children}</Container>
    )
}

export default Button