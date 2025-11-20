import './App.css'
import { useEffect, useState } from 'react'
import {useDebounce} from './hooks/useDebounce'

function App() {
  const [search, setSearch] = useState('')
  const debounceSearch = useDebounce(search, 500)

  useEffect(()=>{
    if(debounceSearch){
      console.log('Searching for:', debounceSearch)
    }
  }, [debounceSearch])
 
  return (
    <div>
      custom debounce hook
      <div>
        <input type="text" value={search} onChange={(e)=> setSearch(e.target.value)} placeholder="Type something..." />
      </div>
    </div>
  )
}

export default App
