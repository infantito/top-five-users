import type React from 'react'
import { Link } from 'react-router-dom'

const USERNAMES = ['GrahamCampbell', 'fabpot', 'weierophinney', 'rkh', 'josh'] as const

const Home = () => {
  return (
    <>
      Top 5 GitHub Users Tap the username to see more information
      <div className="d-flex flex-wrap mt-4">
        {USERNAMES.map(username => {
          return (
            <Link key={username} to={username} className="btn btn-primary mt-2 mx-2">
              {username}
            </Link>
          )
        })}
      </div>
    </>
  )
}

export default Home
