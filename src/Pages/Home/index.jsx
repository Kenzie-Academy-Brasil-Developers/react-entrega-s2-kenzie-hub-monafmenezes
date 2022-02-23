import { grey2, colorprimary } from "../../Styles/global"
import Button from "../../Components/Button"
import Input from "../../Components/Input"
import { Redirect } from "react-router-dom"

const Home = ({authenticated}) => {

    if(!authenticated) {
        return <Redirect to='/'/>
    }

    return( 
        <div>

            Home

        </div>
    )
}


export default Home