import { Container, Status, SelectOpition } from "./style"


const SelectStatus = ({status, register, name, error ,label, ...rest}) => {

    return(


        <Container>
            <div><p>{label} {!!error && <span> {error}</span> }</p></div>
            <SelectOpition isErrored={!!error} label="Status" {...rest} {...register(name)}>
                {status.map((atual, index) => (
                    <Status value={atual} key={index} >{atual}</Status>
                ))}
            </SelectOpition>

        </Container>

    )
}

export default SelectStatus