import { useRef, useState } from 'react'

import Series from './Series'
import Loading from './Loading'
import useFetcher from '../hooks/useFetcher'
import { getSeries } from '../utils/getSeries'

function App () {
  const searchRef = useRef(null)
  const [query, setQuery] = useState('the+100')
  const { dataState: series, loading } = useFetcher(getSeries, query)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setQuery(searchRef.current.value)
    console.log(searchRef.current.value)
    // e.target.reset()
  }

  return (
    <div className='container'>
      <form onSubmit={handleSubmit}>
        <input ref={searchRef} type='search' placeholder='Show name...' />
        <button>Search</button>
      </form>
      <section className='py-4'>
        {loading ? <Loading /> : <Series data={series} />}
      </section>
    </div>
  )
}

export default App
