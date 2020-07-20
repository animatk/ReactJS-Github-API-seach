import React, { useState, useEffect } from 'react'

// components
import Search from './Search'
import Profile from './Profile'

// css
import '../Scss/index.scss'

function App() {
  const [profile, setProfile] = useState(null)

  useEffect(() => {
    if (localStorage.getItem('profile')) {
      const profileStorage = JSON.parse(localStorage.getItem('profile'))
      setProfile(profileStorage)
    }
  }, [])

  return (
    <div className="container">
      <h1>Github API Search</h1>
      {!profile
        ? <Search setProfile={setProfile} />
        : <Profile data={profile} setProfile={setProfile} />}
    </div>
  )
}

export default App
