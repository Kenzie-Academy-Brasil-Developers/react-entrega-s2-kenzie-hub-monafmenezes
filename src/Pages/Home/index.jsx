import { Redirect } from "react-router-dom"

const Home = ({authenticated}) => {

    if(authenticated === false) {
        return <Redirect to='/'/>
    }

    return( 
        <div>

            Home

        </div>
    )
}


export default Home