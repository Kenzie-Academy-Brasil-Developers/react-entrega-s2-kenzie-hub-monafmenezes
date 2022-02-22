import { Route, Switch } from "react-router-dom"
import Login from '../Pages/Login'
import Home from '../Pages/Home'
import Register from '../Pages/Register'

const Routes = () => {
    return(
        <Switch>
            <Route exact path='/'>
                <Login/>
            </Route>
            <Route exact path='/home'>
                <Home/>
            </Route>
            <Route exact path='/register'>
                <Register/>
            </Route>
        </Switch>
    )
}

export default Routes