import React from 'react'
import queryString from 'query-string'

import { useNavigate, useLocation } from 'react-router-dom'

import { useForm } from '../../hooks'
import { HeroCard } from '../components'
import { getHeroesByName } from '../helpers'

export const SearchPage = () => {

    const navigate = useNavigate();
    const { search } = useLocation();
    const { q = '' } = queryString.parse(search)

    const heroes = getHeroesByName(q);

    const { formState, onInputChange } = useForm({
        searchText: q
    });
    const { searchText } = formState

    const onSearchSubmit = (e) => {
        e.preventDefault();
        navigate(`?q=${searchText}`)
    }

    return (
        <>
            <h1>SearchPage</h1>
            <hr />

            <div className="row">

                <div className="col-5">
                    <h4>Searching</h4>
                    <hr />

                    <form onSubmit={onSearchSubmit}>
                        <input
                            type="text"
                            placeholder="Search a hero"
                            className="form-control"
                            name="searchText"
                            value={searchText}
                            onChange={onInputChange}
                            autoComplete="off"
                        />

                        <button
                            type="submit"
                            className="btn btn-outline-primary mt-1">
                            Search
                        </button>

                    </form>
                </div>

                <div className="col-7">

                    <h4>Results</h4>
                    <hr />
                    {
                        (q === '')
                            ? <div className="alert alert-info">
                                Search a hero
                            </div>
                            : (heroes.length === 0 && <div className="alert alert-danger">
                                No results for: <b>{q}</b>
                            </div>)
                    }

                    <>
                        {
                            heroes.map(hero =>
                                (<HeroCard key={hero.id} {...hero} />)
                            )
                        }
                    </>


                </div>
            </div>
        </>
    )
}
