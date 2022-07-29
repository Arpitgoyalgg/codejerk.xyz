import React from 'react'
import { ExtLink, Input, TextArea } from './atoms'
import { supabase } from '../utils/supabaseClient.js'


export function Feedback() {
  const [submitState, setSubmitState] = React.useState({
    submitting: false,
    submitted: false,
    errors: '',
  })

  const [messageVaildation, setMessageValidation] = React.useState(false)

  const initialValues = {
    message: '',
    email: '',
    twitter: '',
  }

  const [values, setValues] = React.useState(initialValues)

  const handleInputChange = e => {
    const { name, value } = e.target

    setValues({
      ...values,
      [name]: value,
    })
  }

  async function submitData() {
    const { data, error } = await supabase.from('feedback').insert([
      {
        message: values.message,
        email: values.email,
        twitter: values.twitter,
      },
    ])
    if (error) {
      setSubmitState({ submitting: false, submitted: false, errors: '' })
    } else {
      setSubmitState({ submitting: false, submitted: true, errors: '' })
    }

    setValues(initialValues)
  }

  const handleSubmit = () => {
    if (values.message.length > 10) {
      setMessageValidation(true)
    } else {
      setMessageValidation(false)
      return
    }

    setSubmitState(
      { submitting: true, submitted: false, errors: '' },
      submitData()
    )
  }

  return (
    <div className="mt-32 full-width-container bg-back-secondary">
      <div className="container max-w-xl px-8 pt-16 pb-2 mx-auto text-gray-900">
        <h6 className="text-xl font-semibold text-center text-accent">
          A small favor
        </h6>
        <p className="mx-auto mt-2 text-center text-fore-subtle">
          Is this post confusing? Did I make a mistake? Let me know your
          feedback and suggestions!
        </p>
        <div className="grid grid-cols-1 gap-3 mt-3">
          <TextArea
            labelText="Message"
            id="message"
            name="message"
            value={values.message}
            placeholder="What's your feedback?"
            required
            disabled={submitState.submitting}
            onChange={handleInputChange}
          />
          <div className="grid grid-cols-1 gap-3 lg:grid-cols-2">
            <Input
              labelText="(Optional) Email"
              id="email"
              name="email"
              value={values.email}
              placeholder="hey@email.com"
              type="email"
              disabled={submitState.submitting}
              onChange={handleInputChange}
            />
            <Input
              labelText="(Optional) Twitter Handle"
              id="twitter"
              name="twitter"
              value={values.twitter}
              placeholder="@twitter"
              type="twitter"
              disabled={submitState.submitting}
              onChange={handleInputChange}
            />
          </div>
          {!submitState.succeeded && (
            <button
              disabled={submitState.submitting}
              type="submit"
              className="py-3 font-semibold rounded-md bg-gradient-to-r from-teal-500 to-blue-500 bg-200 bg-left hover:bg-right transition-all duration-[0.5s] ease-out text-back-secondary focus-visible:outline-accent disabled:opacity-50"
              onClick={handleSubmit}
            >
              {submitState.submitting
                ? 'Submitting feedback...'
                : 'Send Feedback 😊'}
            </button>
          )}
          {!messageVaildation && (
            <p className="mt-3 font-semibold text-center text-fore-secondary text-pink-600 animate-pulse">
              Please enter a message longer than 10 characters and
              understandable.
            </p>
          )}
          {!submitState.submitting && submitState.submitted && (
            <p className="mt-3 font-semibold text-center text-fore-secondary">
              Thanks for taking the time to give a feedback!
            </p>
          )}
          {!submitState.submitting && submitState.errors && (
            <p className="mt-3 font-medium text-center text-pink-500">
              I'm having errors sending your feedback. Alternatively, you can
              reach me out on Twitter:{' '}
              <ExtLink link="https://twitter.com/arpitgoyalgg">
                @arpitgoyalgg
              </ExtLink>
            </p>
          )}
        </div>
      </div>
    </div>
  )
}
