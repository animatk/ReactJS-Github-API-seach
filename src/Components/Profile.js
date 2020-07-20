import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

// components
import GithubAPI from './GithubAPI'

const Profile = ({
  data, setProfile,
}) => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    fetch(`https://api.github.com/users/${data.github}`)
      .then((res) => res.json())
      .then(
        (profile) => {
          setUser(profile)
        },
      )
  }, [])

  return (
    <>
      <p className="content">
        <button type="button" onClick={() => setProfile(null)} className="button primary inline"> Consulta de perfiles </button>
        &raquo; &nbsp;
        {data.firstname}
      </p>
      <div className="content grid grid--columns grid--gap">
        <div>
          {user
            && <img src={user.avatar_url} alt={user.name} height="200px" />}
        </div>
        <div>
          <h3>{`${data.firstname} ${data.lastname}`}</h3>
          <ul>
            <li>{data.uid}</li>
            <li>{data.birthday}</li>
            <li>{data.email}</li>
          </ul>
        </div>
        <div>
          <h3>{`Github: @${data.github}`}</h3>
          {user
            && (
            <>
              <ul>
                <li>{`Public repos: ${user.public_repos}`}</li>
                <li>{`Location: ${user.location}`}</li>
                {user.blog
                && <li><a href={user.blog} target="_blank" rel="noreferrer">{user.blog}</a></li>}
                <li>{`Followers: ${user.followers}`}</li>
              </ul>
              <p>{user.bio}</p>
            </>
            )}
        </div>
      </div>
      <GithubAPI username={data.github} />
    </>
  )
}

Profile.propTypes = {
  data: PropTypes.objectOf(PropTypes.string).isRequired,
  setProfile: PropTypes.func.isRequired,
}

export default Profile
