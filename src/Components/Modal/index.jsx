import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Typography from '@mui/material/Typography';
import Button from '../Button';


const ModalTech = ({open, handleClose}) => {



    return (
        
        <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open} 
        sx={{width: 330,
            height: 330,
        }}
        
      >
        <DialogTitle 
            id="customized-dialog-title" 
            onClose={handleClose} 
            sx={{
                backgroundColor: '#343B41',
                height: 40}}>
        Cadastrar Tecnologia
        </DialogTitle>
        <DialogContent dividers sx={{backgroundColor: '#212529'}} >
          <Typography gutterBottom>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.
          </Typography>
          <Typography gutterBottom>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
          </Typography>
          <Typography gutterBottom>
            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus
            magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec
            ullamcorper nulla non metus auctor fringilla.
          </Typography>
        </DialogContent>
        <DialogActions sx={{backgroundColor: '#212529',
                            height:70}} >
          {/* <Button autoFocus onClick={handleClose}>
            Save changes
          </Button> */}
            <Button>
            Cadastrar Tecnologia
            </Button>
        </DialogActions>

      </Dialog>

    )
}

export default ModalTech

