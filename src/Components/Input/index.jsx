import { Container, InputContainer } from "./style"

const Input = ({label, register, height, name, icon: Icon, error='', ...rest}) => {

    return(

        <Container>

            <div><p>{label}</p> {!!error && <span> {error}</span>}</div>
            
            <InputContainer isErrored={!!error}>

                <input {...rest}/>
                {Icon && <Icon size={10} />}


            </InputContainer>
            
        </Container>

    )
}

export default Input