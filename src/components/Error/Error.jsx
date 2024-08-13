import React from 'react'
import { Link } from 'react-router-dom';
import './Error.css'

const Error = () => {
return (
    <div>
        
        <h1>Error 404, pagina no encontrada</h1>
        
        <Link to="/">Ir a la pagina principal</Link>
    </div>
)
}

export default Error;