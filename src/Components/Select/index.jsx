import { FormControl, InputLabel, MenuItem, Select } from "@mui/material"


const SelectStatus = ({event, ...rest}) => {

    return(

       <FormControl fullWidth>  
           <InputLabel
            style={{
                marginTop: 17, 
                color: '#e3f2fd',
                marginLeft: 8
            }}
           
           >Status</InputLabel>
           <Select 

                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value='status'
                label="Status"
                onChange={event}
      
                
                style={{
                    width: '94%',
                    height: 38,
                    marginTop: 15,
                    marginLeft: 10
                }}  

            >
            <MenuItem value='iniciante'>Iniciante</MenuItem>
            <MenuItem value='intermediário'>Intermediário</MenuItem>
            <MenuItem  value='avançado'>Avançado</MenuItem>
           </Select>
           
           
       </FormControl>

    )
}

export default SelectStatus