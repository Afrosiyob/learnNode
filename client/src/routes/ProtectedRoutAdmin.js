

import React from 'react'
import { Route, Redirect } from 'react-router-dom'



export const ProtectedRoutAdmin = ( { component: Component, ...rest } ) => {

    const token = true;

    return (
        <Route
            { ...rest }
            render={ ( props ) =>
                token ? ( <Component { ...props } /> ) : ( <Redirect
                    to={
                        {
                            pathname: '/auth',
                            state: { from: props.location }
                        }
                    }
                /> )
            }
        />
    )
}
