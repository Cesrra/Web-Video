import React from 'react'
import '../assets/styles/components/Search.scss'

const Search = () => (
    <div className="search">
        <h2 className="search__title">¿Qué quieres ver hoy?</h2>
        <input className="search__input" type="text" placeholder="Buscar..."/>
    </div>
)

export default Search