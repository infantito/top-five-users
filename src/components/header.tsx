import { Link, Outlet, useParams } from 'react-router-dom'

/* eslint-disable jsx-a11y/anchor-is-valid */
function Header() {
  const { username } = useParams()

  return (
    <>
      <header>
        <nav className="navbar navbar-dark bg-dark">
          <div className="container">
            {username && (
              <Link to="/" className="text-white">
                Back
              </Link>
            )}
            <h2 className="text-center text-white">Home</h2>
          </div>
        </nav>
      </header>
      <div className="container">
        <Outlet />
      </div>
    </>
  )
}

export default Header
