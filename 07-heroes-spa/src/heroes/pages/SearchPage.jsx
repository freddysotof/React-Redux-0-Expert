import { useNavigate, useLocation } from 'react-router-dom'
import queryString from 'query-string'
import { useForm } from "../../hooks"
import { HeroCard } from "../components"
import { getHeroesByName } from '../helpers'

export const SearchPage = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const { q = '' } = queryString.parse(location.search);

  const heroes = getHeroesByName(q);

  const showSearch = (q.length===0);
  const showError = (q.length>0) && heroes.length===0;

  const { onInputChange, searchText } = useForm({
    searchText: q
  });


  const onSearchSubmit = (event) => {
    event.preventDefault();
    // if (searchText.trim().length <= 1) return;
    navigate(`?q=${searchText}`);
  }


  return (
    <>
      <h1>Search</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Seacrhing</h4>
          <hr />
          <form aria-label='form' onSubmit={onSearchSubmit}>
            <input
              type="text"
              placeholder="Search a hero"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={onInputChange}
            />

            <button
              className="btn btn-outline-primary mt-1"
            >
              Search
            </button>
          </form>
        </div>

        <div className="col-7">
          <h4>Results</h4>
          <hr />

          {/* {
            (q==='')
            ? (  <div className="alert alert-primary">Search a hero</div>)
            : (heroes.length===0) && (<div className="alert alert-danger"><b>No hero with {q}</b></div>)
          
          } */}

          <div
          aria-label='alert-danger'
            className="alert alert-primary animate__animated animate__fadeIn"
            style={{ display: showSearch? '':'none' }}
          >
            Search a hero
          </div>
          <div
            className="alert alert-danger animate__animated animate__fadeIn"
            style={{ display:showError? '':'none' }}
          >
            <b>No hero with {q}</b>
          </div>
          {
            heroes.map(hero => (
              <HeroCard key={hero.id} {...hero} />
            ))
          }

        </div>
      </div>

    </>

  )
}
