import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
import Routes from "./Routes";
import GlobalStyled from "./Styles/global"
function App() {
  return (

    <>
      <GlobalStyled/>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Routes/>
     
  
    </>
    
  );
}

export default App;
