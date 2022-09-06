import { useEffect, useState } from 'react'

const useFetcher = (callback, query) => {
  const [dataState, setDataState] = useState([])
  const [loading, setLoading] = useState(true)

  const getData = async () => {
    const { data } = await callback(query)
    setDataState(data)
    setLoading(false)
  }

  useEffect(() => {
    getData()
  }, [query])
  console.log(dataState)

  return { dataState, loading }
}

export default useFetcher
