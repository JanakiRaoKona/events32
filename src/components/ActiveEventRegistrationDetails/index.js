// Write your code here
import {Component} from 'react'
import './index.css'

const registrationConstantStatus = {
  noActive: 'NoActiveEvent',
  yetToRegister: 'YET_TO_REGISTER',
  registered: 'REGISTERED',
  closed: 'REGISTRATIONS_CLOSED',
}
class ActiveEventRegistrationDetails extends Component {
  onClickNoActive = () => (
    <div>
      <p className="no-active-heading">
        Click on an event, to view its registration details{' '}
      </p>
    </div>
  )

  onClickYetRegister = () => (
    <div className="reg-container">
      <img
        className="register-image"
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
      />
      <p className="reg-para">
        A live performance brings so much to your relationship with dance.
        Seeing dance live can often make you fall totally in love with this
        beautiful art form.
      </p>
      <button type="button" className="register-button">
        Register Here
      </button>
    </div>
  )

  onClickRegistered = () => (
    <div className="tick-container">
      <img
        className="tick-image"
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
      />
      <h1 className="tick-heading">
        You have already registered for the event
      </h1>
    </div>
  )

  onClickClosed = () => (
    <div className="closed-container">
      <img
        className="closed-image"
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
      />
      <h1 className="closed-heading">Registrations are closed Now!</h1>
      <p className="closed-para">Stay tuned. We will reopen</p>
    </div>
  )

  render() {
    const {sendStatus} = this.props
    console.log(sendStatus)

    switch (sendStatus) {
      case registrationConstantStatus.noActive:
        return this.onClickNoActive()
      case registrationConstantStatus.yetToRegister:
        return this.onClickYetRegister()
      case registrationConstantStatus.registered:
        return this.onClickRegistered()
      case registrationConstantStatus.closed:
        return this.onClickClosed()
      default:
        return null
    }
  }
}

export default ActiveEventRegistrationDetails
