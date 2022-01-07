import React, { useState } from 'react'
import styles from './profileForm.module.css'
import { Formik, Form, Field } from 'formik'

interface ProfileValues {
  url: String
}

// const ProfileForm = React.forwardRef({inputLabel}, ref) => {
type Ref = HTMLFormElement
type Props = { inputLabel: String }

const ProfileForm = React.forwardRef<Ref, Props>(({ inputLabel }, ref) => {
  const [profile, setProfile] = useState<String>('')
  const initialValues: ProfileValues = {
    url: '',
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, actions) => {
        console.log({ values, actions })
        alert(JSON.stringify(values, null, 2))
        setProfile(values.url)
        actions.setSubmitting(false)
      }}
    >
      <>
        {profile && (
          <Form className={styles.form}>
            <div className={styles.inputWrapper}>
              <label htmlFor="profileUrl">{inputLabel}</label>
              <Field
                id="profileUrl"
                type="text"
                name="url"
                placeholder="https://soundcloud.com/davidmeade"
              />
            </div>
            <button type="submit">Submit</button>
          </Form>
        )}
        {!profile && (
          <iframe
            width="100%"
            height="166"
            scrolling="no"
            frameborder="no"
            allow="autoplay"
            // src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/293&amp;"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/293&amp;"
          ></iframe>
        )}
      </>
    </Formik>
  )
})

export default ProfileForm

// https://developers.soundcloud.com/docs/api/guide#resolving

{
  /* <iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1016968462&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/andrewgoestohell" title="ANDREW GOES TO HELL" target="_blank" style="color: #cccccc; text-decoration: none;">ANDREW GOES TO HELL</a> · <a href="https://soundcloud.com/andrewgoestohell/boom-boom-boom-boom-in-my-head" title="boom boom boom boom (in my head )" target="_blank" style="color: #cccccc; text-decoration: none;">boom boom boom boom (in my head )</a></div> */
}
