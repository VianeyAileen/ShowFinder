import { useParams } from 'react-router-dom'
import useFetcher from '../hooks/useFetcher'
import { getSingleSerie } from '../utils/getSeries'

import CardSingleSerie from './CardSingleSerie'
import Loading from './Loading'

const Serie = () => {
  const { idSerie } = useParams()
  const { dataState: singleSeries, loading } = useFetcher(getSingleSerie, idSerie)

  return (
    loading
      ? <Loading />
      : (
        <div>
          <CardSingleSerie data={singleSeries} {...singleSeries} />
        </div>
        )
  )
}

export default Serie
