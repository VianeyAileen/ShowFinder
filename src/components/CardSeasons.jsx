import { useParams } from 'react-router-dom'
import useFetcher from '../hooks/useFetcher'
import { getEpisodes } from '../utils/getSeries'
import Loading from './Loading'

const CardEpisodes = ({ number, summary }) => {
  const { idSerie } = useParams()
  const { dataState: episodes, loading: loadEpisodes } = useFetcher(getEpisodes, idSerie)

  // For setting a default image in case the api doesn't have one
  const noImage = 'https://comnplayscience.eu/app/images/notfound.png'
  return (
    <div className='container'>
      <div className='tab'>
        <input id={number} type='checkbox' />
        <label htmlFor={number}>Season {number}</label>
        <div className='content container'>
          <div>
            {loadEpisodes
              ? <Loading />
              : (
                <div>
                  {episodes.map(item => (
                    <div key={item.id}>
                      {item.season === number &&
                        <div className='info-episode'>
                          <p className='num-episode'>EPISODE {item.number}</p>
                          <img className='img-episode img-fluid' src={item.image !== null ? item.image.original : noImage} alt={item.name} />
                          <div
                            className='summary-episode'
                            dangerouslySetInnerHTML={{ __html: item.summary }}
                          />
                        </div>}
                    </div>
                  ))}
                </div>
                )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardEpisodes
