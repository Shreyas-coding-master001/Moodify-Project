import React from 'react'
import authUser from '../auth/hooks/authHooks';

const Home = () => {
  const { data, logoutUser } = authUser();

  return (
    <div>
      <h2>Home Page</h2>

      <button onClick={() => {
        logoutUser();
      }}>Logout</button>
    </div>
  )
}

export default Home;