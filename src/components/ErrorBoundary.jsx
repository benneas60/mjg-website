import { Component } from 'react'

// Catches any error thrown while rendering the app and shows a visible,
// readable message instead of a blank white screen. Without this, any
// uncaught error in a component crashes React silently in production
// (no console access needed to see something went wrong) and the page
// just shows nothing.
export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { error: null }
  }

  static getDerivedStateFromError(error) {
    return { error }
  }

  componentDidCatch(error, info) {
    // Still log to console for anyone who does have dev tools open.
    console.error('MJG site crashed:', error, info)
  }

  render() {
    if (this.state.error) {
      return (
        <div
          style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem',
            fontFamily: 'sans-serif',
            textAlign: 'center',
            color: '#1F2937',
            background: '#ffffff',
          }}
        >
          <h1 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>
            Something went wrong loading this page.
          </h1>
          <p style={{ maxWidth: '32rem', marginBottom: '1rem', color: '#4B5563' }}>
            Please screenshot the error details below and send them over so this can be fixed.
          </p>
          <pre
            style={{
              maxWidth: '90vw',
              overflow: 'auto',
              background: '#F3F4F6',
              padding: '1rem',
              borderRadius: '0.5rem',
              textAlign: 'left',
              fontSize: '0.8rem',
              color: '#B91C1C',
            }}
          >
            {String(this.state.error && this.state.error.stack ? this.state.error.stack : this.state.error)}
          </pre>
        </div>
      )
    }

    return this.props.children
  }
}
