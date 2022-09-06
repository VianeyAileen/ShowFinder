import { useParams } from 'react-router-dom'
import useFetcher from '../hooks/useFetcher'
import { getCast, getSeasons } from '../utils/getSeries'
import CardCast from './CardCast'
import CardSeasons from './CardSeasons'
import Loading from './Loading'

const CardSingleSerie = ({ image, name, premiered, genres, summary, language, rating, officialSite }) => {
  // Date formating from yyyy-mm-dd into month dd, yyyy
  const [year, month, day] = premiered.split('-')
  const dateOptions = { month: 'long', day: 'numeric', year: 'numeric' }
  const dateFormatter = new Intl.DateTimeFormat('en-US', dateOptions)
  const date = new Date(year, month - 1, day)
  const dateAsFormattedString = dateFormatter.format(date)

  // For setting a default image in case the api doesn't have one
  const noImage = 'https://comnplayscience.eu/app/images/notfound.png'

  const { idSerie } = useParams()
  const { dataState: cast, loading: loadCast } = useFetcher(getCast, idSerie)
  const { dataState: seasons, loading: loadingSeasons } = useFetcher(getSeasons, idSerie)

  return (
    <section className='container'>
      <div>
        <ul className='nav nav-tabs' id='myTab' role='tablist'>
          <li className='nav-item' role='presentation'>
            <button className='nav-link active' id='home-tab' data-bs-toggle='tab' data-bs-target='#home-tab-pane' type='button' role='tab' aria-selected='true'>Main Info</button>
          </li>
          <li className='nav-item' role='presentation'>
            <button className='nav-link' id='contact-tab' data-bs-toggle='tab' data-bs-target='#contact-tab-pane' type='button' role='tab' aria-controls='contact-tab-pane' aria-selected='false'>Episodes</button>
          </li>
          <li className='nav-item' role='presentation'>
            <button className='nav-link' id='profile-tab' data-bs-toggle='tab' data-bs-target='#profile-tab-pane' type='button' role='tab' aria-controls='profile-tab-pane' aria-selected='false'>Cast</button>
          </li>
        </ul>
        <div className='tab-content' id='myTabContent'>
          {/* Info */}
          <div className='tab-pane fade show active' id='home-tab-pane' role='tabpanel' aria-labelledby='home-tab' tabIndex={0}>
            <article className='container single-show text-light'>
              <section className='d-flex test'>
                <div className='image-show'>
                  <img className='image' src={image !== null ? image.medium : noImage} alt={name} width={250} />
                </div>

                <div className='main-info mx-5'>
                  <h2>
                    <strong>{name.toUpperCase()}</strong>
                  </h2>
                  <p>{dateAsFormattedString}</p>
                  <p className='my-2 genres'>{genres.join(', ')}</p>
                  <div className='mt-5' dangerouslySetInnerHTML={{ __html: summary }} />
                </div>
              </section>

              <section className='secondary-info mt-3'>
                <p>
                  <span>
                    <strong>Language: </strong>
                  </span>
                  {language}
                </p>
                <p>
                  <span>
                    <strong>Average Score: </strong>
                  </span>
                  {rating.average}
                </p>
                <p>
                  <span>
                    <strong>Official Site: </strong>
                  </span>
                  <a className='official-site text-light' href={officialSite} target='_blank' rel='noreferrer'>{officialSite}</a>
                </p>
              </section>

              {/* {loading
                ? <Loading />
                : (
                  <section className='cast mt-3'>
                    <div className='accordion accordion-flush' id='accordionFlushExample'>
                      <div className='accordion-item'>
                        <h2 className='accordion-header' id='flush-headingOne'>
                          <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#flush-collapseOne' aria-expanded='false' aria-controls='flush-collapseOne'>
                            CAST
                          </button>
                        </h2>
                        <div id='flush-collapseOne' className='accordion-collapse collapse' aria-labelledby='flush-headingOne'>
                          {cast.map(item => (
                            <div className='accordion-cast' key={item.character.id}>
                              <CardCast {...item} />
                            </div>

                          ))}
                        </div>
                      </div>
                    </div>
                  </section>
                  )} */}

            </article>
          </div>
          {/* Episodes */}
          <div className='tab-pane fade' id='contact-tab-pane' role='tabpanel' aria-labelledby='contact-tab' tabIndex={0}>
            {loadingSeasons
              ? <Loading />
              : (
                <div className='single-show'>
                  {seasons.map(item => (
                    <div key={item.id}>
                      <CardSeasons {...item} />
                    </div>
                  ))}
                </div>
                )}
          </div>
          {/* Cast */}
          <div className='tab-pane fade' id='profile-tab-pane' role='tabpanel' aria-labelledby='profile-tab' tabIndex={0}>
            {loadCast
              ? <Loading />
              : (
                <div className='single-show'>
                  <ul className='row gx-0 gx-md-5 gy-4 mx-2 my-1 container'>
                    {cast.map(item => (
                      <div className='tab-cast' key={item.character.id}>
                        <CardCast {...item} />
                      </div>
                    ))}
                  </ul>
                </div>
                )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default CardSingleSerie
