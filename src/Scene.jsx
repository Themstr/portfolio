import React, { useEffect, useState } from 'react'
import Loading from './Loading/Loading';
import App from './App';

function Scene() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000)
    return () => { }
  }, [])
  
  return (
    <div>
      {loading
        ? <Loading/>
        : <App />
      }
    </div>
  )
}

export default Scene