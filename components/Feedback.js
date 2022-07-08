import { useState } from 'react'
import { supabase } from '../lib/utils/supabaseClient'

export default function Feedback() {
  const initialValues = {
    message: '',
    email: '',
    twitter: '',
  }

  const [values, setValues] = useState(initialValues)

  const handleInputChange = (e) => {
    const { name, value } = e.target

    setValues({
      ...values,
      [name]: value,
    })
  }

  const handleShoot = async () => {
    console.log(values)
    const { data, error } = await supabase
      .from('feedback')
      .insert([{ message: values.message, email: values.email, twitter: values.twitter },])
  }

  return (
    <>
      <div className="full-width-container bg-back-secondary mt-14">
        <div className="container mx-auto max-w-xl px-8 pt-16 pb-2 text-gray-900">
          <h6 className="text-accent text-center text-xl font-semibold">A small favor</h6>
          <p className="text-fore-subtle mx-auto mt-2 text-center">
            Is this post confusing? Did I make a mistake? Let me know if you have any feedback and
            suggestions!
          </p>
          <form className="mt-3 grid grid-cols-1 gap-3">
            <div className="group">
              <label className="text-fore-secondary group-hover:text-accent text-sm font-medium transition-colors duration-200">
                Message
              </label>
              <textarea
                className="border-back-subtle bg-back-primary focus:border-accent text-fore-primary mt-1 block w-full rounded-md border p-3 outline-none disabled:opacity-50"
                style={{ minHeight: '80px' }}
                placeholder="What's your feedback?"
                name='message'
                onChange={handleInputChange}
              />
            </div>
            <div className="grid grid-cols-1 gap-3 lg:grid-cols-2">
              <div className="group">
                <label className="text-fore-secondary group-hover:text-accent text-sm font-medium transition-colors duration-200">
                  (Optional) Email
                </label>
                <input
                  className="border-back-subtle bg-back-primary focus:border-accent text-primary mt-1 block w-full rounded-md border p-3 outline-none disabled:opacity-50"
                  placeholder="hey@email.com"
                  name='email'
                  onChange={handleInputChange}
                />
              </div>
              <div className="group">
                <label className="text-fore-secondary group-hover:text-accent text-sm font-medium transition-colors duration-200">
                  (Optional) Twitter Handle
                </label>
                <input
                  className="border-back-subtle bg-back-primary focus:border-accent text-primary mt-1 block w-full rounded-md border p-3 outline-none disabled:opacity-50"
                  placeholder="@twitter"
                  name='twitter'
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <button
              type="submit"
              className="bg-200 text-back-secondary focus-visible:outline-accent mt-8 rounded-md bg-gradient-to-r from-teal-500 to-blue-500 bg-left py-3 font-semibold transition-all duration-[0.5s] ease-out hover:bg-right disabled:opacity-50"
              onClick={handleShoot}
            >
              Shoot 🚀
            </button>
          </form>
        </div>
      </div>
    </>
  )
}
