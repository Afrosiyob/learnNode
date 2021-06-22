import React from 'react'
import { Redirect, Route } from 'react-router-dom'




export const ProtectedRoutAuth = ( { component: Component, ...rest } ) => {

    const token = true;

    return (
        <Route
            { ...rest }
            render={ ( props ) =>
                !token ? ( <Component { ...props } /> ) : ( <Redirect to={ { pathname: '/admin', state: { from: props.location } } } /> )
            }
        />
    )
}
