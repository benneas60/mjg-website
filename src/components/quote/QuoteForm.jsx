import { useState } from 'react'
import { Upload, CheckCircle2 } from 'lucide-react'
import { services } from '../../data/services'

const initialState = {
  name: '',
  phone: '',
  email: '',
  address: '',
  service: '',
  description: '',
  contactMethod: 'phone',
  preferredTime: '',
}

export default function QuoteForm() {
  const [form, setForm] = useState(initialState)
  const [photos, setPhotos] = useState([])
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleFiles = (e) => {
    const files = Array.from(e.target.files || [])
    setPhotos(files)
  }

  const validate = () => {
    const next = {}
    if (!form.name.trim()) next.name = 'Enter your name.'
    if (!form.phone.trim()) next.phone = 'Enter a phone number.'
    if (!form.email.trim()) next.email = 'Enter an email address.'
    if (!form.address.trim()) next.address = 'Enter the project address.'
    if (!form.service) next.service = 'Select a service.'
    return next
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const next = validate()
    setErrors(next)
    if (Object.keys(next).length > 0) return

    // TODO: connect to your backend, form service (e.g. Formspree, Netlify
    // Forms), or email API of choice. `form` holds the field values and
    // `photos` holds the selected File objects.
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="bg-forest-50/70 border border-forest/20 rounded-xl p-10 text-center flex flex-col items-center gap-4">
        <CheckCircle2 className="w-12 h-12 text-forest" strokeWidth={1.5} />
        <h3 className="font-heading font-bold text-xl text-charcoal-950">Request received</h3>
        <p className="text-charcoal/75 max-w-md">
          Thanks, {form.name.split(' ')[0] || 'there'}. MJG will contact you shortly to schedule your
          free estimate.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <Field label="Name" htmlFor="name" error={errors.name} required>
          <input
            id="name"
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            placeholder="Jane Smith"
            className="input"
          />
        </Field>

        <Field label="Phone Number" htmlFor="phone" error={errors.phone} required>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            placeholder="(609) 555-0123"
            className="input"
          />
        </Field>

        <Field label="Email" htmlFor="email" error={errors.email} required>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="jane@email.com"
            className="input"
          />
        </Field>

        <Field label="Property Address" htmlFor="address" error={errors.address} required>
          <input
            id="address"
            name="address"
            type="text"
            value={form.address}
            onChange={handleChange}
            placeholder="Street, City, NJ"
            className="input"
          />
        </Field>
      </div>

      <Field label="Service Needed" htmlFor="service" error={errors.service} required>
        <select id="service" name="service" value={form.service} onChange={handleChange} className="input">
          <option value="">Select a service</option>
          {services.map((s) => (
            <option key={s.slug} value={s.slug}>
              {s.name}
            </option>
          ))}
          <option value="other">Other</option>
        </select>
      </Field>

      <Field label="Project Description" htmlFor="description">
        <textarea
          id="description"
          name="description"
          rows={5}
          value={form.description}
          onChange={handleChange}
          placeholder="Tell us about your project: size of the area, current condition, what you have in mind..."
          className="input resize-none"
        />
      </Field>

      <Field label="Upload Photos" htmlFor="photos">
        <label
          htmlFor="photos"
          className="flex items-center gap-3 border-2 border-dashed border-charcoal-950/20 rounded-md px-4 py-6 cursor-pointer hover:border-forest transition-colors text-sm text-charcoal/70"
        >
          <Upload className="w-5 h-5 text-forest shrink-0" strokeWidth={2} />
          {photos.length > 0 ? `${photos.length} photo(s) selected` : 'Click to upload photos of your project'}
        </label>
        <input
          id="photos"
          name="photos"
          type="file"
          accept="image/*"
          multiple
          onChange={handleFiles}
          className="sr-only"
        />
      </Field>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <Field label="Preferred Contact Method" htmlFor="contactMethod">
          <select
            id="contactMethod"
            name="contactMethod"
            value={form.contactMethod}
            onChange={handleChange}
            className="input"
          >
            <option value="phone">Phone Call</option>
            <option value="text">Text Message</option>
          </select>
        </Field>

        <Field label="Preferred Time for Estimate" htmlFor="preferredTime">
          <select
            id="preferredTime"
            name="preferredTime"
            value={form.preferredTime}
            onChange={handleChange}
            className="input"
          >
            <option value="">No preference</option>
            <option value="morning">Morning (8am – 12pm)</option>
            <option value="afternoon">Afternoon (12pm – 4pm)</option>
            <option value="evening">Evening (4pm – 6pm)</option>
          </select>
        </Field>
      </div>

      <button type="submit" className="btn-primary w-full sm:w-fit mt-2">
        Submit Quote Request
      </button>
    </form>
  )
}

function Field({ label, htmlFor, children, error, required }) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={htmlFor} className="text-sm font-heading font-bold text-charcoal-950">
        {label} {required && <span className="text-forest">*</span>}
      </label>
      {children}
      {error && <p className="text-xs text-red-600">{error}</p>}
    </div>
  )
}
