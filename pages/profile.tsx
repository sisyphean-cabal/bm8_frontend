// {
//   /* <iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay
//   src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/293&amp;{ ADD YOUR PARAMETERS HERE }">
// </iframe></iframe> */
// }

import React, { useEffect } from 'react'
import styles from '../styles/registration.module.css'
import { Formik, Form, Field } from 'formik'
import ProfileForm from '../components/ProfileForm'
import axios from 'axios'
const Profile: React.FC<{}> = () => {
  return (
    <main className={styles.page}>
      <h1>Profile</h1>
      <ProfileForm inputLabel="Soundcloud Profile Url" />
    </main>
  )
}

export default Profile

// curl -X GET "http://api.soundcloud.com/resolve.json?url=http://soundcloud.com/davidmeade&client_id=NkFRUNVgzmbT3DFrWyzy5NQE4E8ag5Ui" -H  "accept: */*"

// http://api.soundcloud.com/resolve.json?url=http://soundcloud.com/davidmeade&client_id=NkFRUNVgzmbT3DFrWyzy5NQE4E8ag5Ui
