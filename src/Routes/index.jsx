import { Route, Switch } from "react-router-dom"
import Login from '../Pages/Login'
import Home from '../Pages/Home'
import Register from '../Pages/Register'
import { useState, useEffect } from "react"

const Routes = () => {
    
    const [authenticated, setAuthenticated] = useState(false)
    const [id, setId] = useState('')

    useEffect(() => {
        const token = JSON.parse(localStorage.getItem('@Kenziehub:token'))
        if(token) {
            return setAuthenticated(true)
        }
    }, [authenticated])

    
    return(
        <Switch>
            <Route exact path='/'>
                <Login setId={setId} authenticated={authenticated}  setAuthenticated={setAuthenticated} />
            </Route>
            <Route exact path='/home'>
                <Home authenticated={authenticated} setAuthenticated={setAuthenticated} id={id} />
            </Route>
            <Route exact path='/register'>
                <Register authenticated={authenticated}  />
            </Route>
        </Switch>
    )
}

export default Routes