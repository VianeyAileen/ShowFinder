import { Link } from 'react-router-dom'
import CardSerie from './CardSerie'

const Series = ({ data }) => {
  return (
    <div>
      {
            data.length === 0
              ? 'No se encontraron resultados'
              : (
                <ul className='row gx-0 gx-md-5 gy-4'>
                  {data.map(item => (
                    <li className='col-12 col-md-6 col-lg-3' key={item.show.id}>
                      <Link className='hover' to={`/${item.show.id}`}>
                        <CardSerie {...item.show} {...item.show.image} />
                      </Link>
                    </li>
                  ))}
                </ul>
                )
      }
    </div>
  )
}

export default Series
