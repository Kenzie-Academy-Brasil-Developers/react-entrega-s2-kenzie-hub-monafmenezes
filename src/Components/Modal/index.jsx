import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '../Button';
import Input from '../Input'
import SelectStatus from '../Select'
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { Redirect, useHistory } from "react-router-dom"
import api from '../../Services/api'
import { colorprimary, colorprimarynegative } from '../../Styles/global';
import { toast } from 'react-toastify';


const ModalTech = ({open, handleClose, token, children, titulo, tecnologia}) => {
  const Status = ['Iniciante', 'Intermediário', 'Avançado']

      const schema = yup.object().shape({
        title: yup.string().required('Campo obrigatório'),
        status: yup.string().required('Campo obrigatório')
      })

    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schema)
    })

    const submit = ({title, status}) => {
      
      api.post('/users/techs', 
      {
        title: title, 
        status: status
      }, 
      {
        headers: {
          Authorization: `Bearer ${token}`
      }
      })
      .then((response) =>{
        toast.success('Sucesso ao cadastrar tecnologia')
    })
    .catch((_) => {
        toast.error('Erro ao cadastrar tecnologia')
    })
    }


    return (
        
        <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open} 
        sx={{width: 310,
            height: 350,
            display: 'flex',
            flexDirection:'column',
            alignItems: 'center',
            justifyContent:'center',
            margin: 'auto'
           
        }}
        
      >
        <DialogTitle 
            id="customized-dialog-title" 
            onClose={handleClose} 
            sx={{
                backgroundColor: '#343B41',
                height: 50}}>
        {titulo}
        </DialogTitle>
        <form onSubmit={handleSubmit(submit)}>
        <DialogContent dividers sx={{backgroundColor: '#212529'}} >
        <Input 
                register={register}  
                name='title' 
                label='Nome do projeto'
                placeholder={tecnologia} 
                error={errors.title?.message}
              /> 
              <SelectStatus 
                register={register}  
                name='status'
                error={errors.status?.message}
                label='Selecionar status'
                children='Selecionar módulo' 
                status={Status} 
                      
              />   
        </DialogContent>
        <DialogActions sx={{backgroundColor: '#212529',
                            height:70, paddingBottom: 5}} >
                            
              <Button
                height='38px'
                heigthDesktop='48px'
                widthMobile='259px' 
                color={colorprimary}
                colorHover={colorprimarynegative}
                widthDesktop='324px'
                type='submit'
              >
              {children}
              </Button>

        </DialogActions>


        </form>
      </Dialog>

    )
}

export default ModalTech

