import { useUser } from 'hooks'

const Profile = () => {
  const { user, status } = useUser()

  if (status === 'loading') {
    return (
      <p className="placeholder-glow">
        <span className="placeholder col-12"></span>
      </p>
    )
  }

  return (
    <div className="col col-4 mt-4">
      <div
        className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
        style={{
          backgroundImage: `url(${user.avatar_url})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
        }}
      >
        <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
          <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">{user.name}</h3>
          <ul className="d-flex list-unstyled mt-auto">
            <li className="me-auto">
              <img
                src="https://github.com/twbs.png"
                alt="Bootstrap"
                width="32"
                height="32"
                className="rounded-circle border border-white"
              />
            </li>
            <li className="d-flex align-items-center me-3">
              <svg className="bi me-2" width="1em" height="1em">
                <use />
              </svg>
              <small>{user.email}</small>
            </li>
            <li className="d-flex align-items-center">
              <svg className="bi me-2" width="1em" height="1em">
                <use />
              </svg>
              <small>{user.location}</small>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Profile
