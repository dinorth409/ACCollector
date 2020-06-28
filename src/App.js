import React, {useState, useEffect} from 'react';
import './App.css';

import KKMusicChecklist from './components/KKMusicChecklist/KKMusicChecklist'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Loading from './components/Loading/Loading'

import { fetchSongs, fetchArt } from './api'

const App = () => {
  const [data, setData] = useState({})
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true)
      const fetchedSongs = await fetchSongs()
      const fetchedArt = await fetchArt()

      setData(fetchedSongs)
      setIsLoading(false)
    }
    getData()
  }, [])

  return (
    <div style={{ backgroundColor: 'rgb(232, 245, 236)' }}>
      <Navbar />
      {isLoading ?
        <Loading /> :
        <KKMusicChecklist songs={data} />
      }
      <Footer />
    </div>
  )
}

export default App;
