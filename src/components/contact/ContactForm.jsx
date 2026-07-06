import { useState } from 'react'
import { CheckCircle2 } from 'lucide-react'

const initialState = { name: '', phone: '', email: '', message: '' }

export default function ContactForm() {
  const [form, setForm] = useState(initialState)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const validate = () => {
    const next = {}
    if (!form.name.trim()) next.name = 'Enter your name.'
    if (!form.email.trim() && !form.phone.trim()) next.email = 'Enter a phone number or email.'
    if (!form.message.trim()) next.message = 'Enter a message.'
    return next
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const next = validate()
    setErrors(next)
    if (Object.keys(next).length > 0) return

    // TODO: connect to your backend or form service of choice.
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="bg-forest-50/70 border border-forest/20 rounded-xl p-8 text-center flex flex-col items-center gap-3">
        <CheckCircle2 className="w-10 h-10 text-forest" strokeWidth={1.5} />
        <h3 className="font-heading font-bold text-lg text-charcoal-950">Message sent</h3>
        <p className="text-charcoal/75 text-sm max-w-sm">
          Thanks for reaching out. MJG will get back to you shortly.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="flex flex-col gap-2">
          <label htmlFor="c-name" className="text-sm font-heading font-bold text-charcoal-950">
            Name <span className="text-forest">*</span>
          </label>
          <input
            id="c-name"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="input"
            placeholder="Jane Smith"
          />
          {errors.name && <p className="text-xs text-red-600">{errors.name}</p>}
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="c-phone" className="text-sm font-heading font-bold text-charcoal-950">
            Phone Number
          </label>
          <input
            id="c-phone"
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            className="input"
            placeholder="(609) 555-0123"
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="c-email" className="text-sm font-heading font-bold text-charcoal-950">
          Email
        </label>
        <input
          id="c-email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          className="input"
          placeholder="jane@email.com"
        />
        {errors.email && <p className="text-xs text-red-600">{errors.email}</p>}
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="c-message" className="text-sm font-heading font-bold text-charcoal-950">
          Message <span className="text-forest">*</span>
        </label>
        <textarea
          id="c-message"
          name="message"
          rows={5}
          value={form.message}
          onChange={handleChange}
          className="input resize-none"
          placeholder="How can we help?"
        />
        {errors.message && <p className="text-xs text-red-600">{errors.message}</p>}
      </div>

      <button type="submit" className="btn-primary w-full sm:w-fit">
        Send Message
      </button>
    </form>
  )
}
