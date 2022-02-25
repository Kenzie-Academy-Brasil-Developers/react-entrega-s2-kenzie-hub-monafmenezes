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

import api from '../../Services/api'
import { colorprimary, colorprimarynegative, grey1 } from '../../Styles/global';
import { toast } from 'react-toastify';


const ModalTech = ({open, handleClose, loadTechs, tech, token}) => {
  const Status = ['Iniciante', 'Intermediário', 'Avançado']
    
      const schema = yup.object().shape({
        status: yup.string()
      })

    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schema)
    })

    const submit = ({status}) => {

      api.put(`/users/techs/${tech.id}`, 
      {
        status: status
      }, 
      {
        headers: {
          Authorization: `Bearer ${token}`
      }
      })
      .then((response) =>{
        toast.success('Sucesso ao alterar status')
       loadTechs()
        
       
    })
    .catch((_) => {
        toast.error('Erro ao alterar status')
    })
    }


   const submitDelete = () => {
    api.delete(`/users/techs/${tech.id}`,  
    {
      headers: {
        Authorization: `Bearer ${token}`
    }
    })
    .then((response) =>{
      toast.success('Sucesso ao excluir')
      loadTechs()

     
  })
  .catch((_) => {
      toast.error('Erro ao alterar excluir')
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
        Tecnologia Detalhes
        </DialogTitle>

        <form onSubmit={handleSubmit(submit)}>

        <DialogContent dividers sx={{backgroundColor: '#212529'}} >
        <Input 
                register={register}  
                name='Titulo' 
                defaultValue={tech?.title}
                label='Nome do projeto'

            
              /> 
              <SelectStatus 
                register={register}  
                name='status'
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
                widthMobile='120px' 
                color={colorprimary}
                colorHover={colorprimarynegative}
                widthDesktop='204px'
                type='submit'
              >
              Salvar alterações
              </Button>

              <Button
                height='38px'
                heigthDesktop='48px'
                widthMobile='98px' 
                color={grey1}
                colorHover={colorprimarynegative}
                widthDesktop='98px'
                type='button' 
                onClick={submitDelete}
              >
             Excluir
              </Button>

        </DialogActions>


        </form>
      </Dialog>

    )
}

export default ModalTech