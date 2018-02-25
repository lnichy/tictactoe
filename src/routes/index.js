import React from 'react'
import {Route, IndexRoute} from 'react-router'
import Template from '../containers/Template'
import TicTacToe from '../containers/TicTacToe'
import About from '../containers/About';


const createRoutes = () => {
    return (
        <Route
            path='/'
            component={Template}
        >
            <IndexRoute
                component={TicTacToe}
            />
            <Route
                path={'/about'}
                component={About}
            />
        </Route>

    )
}
const Routes = createRoutes()

export default Routes