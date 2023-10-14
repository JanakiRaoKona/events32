// Write your code here
import './index.css'

const EventItem = props => {
  const {eventItems, onClickButtons} = props
  const {registrationStatus, imageUrl, name, location} = eventItems
  const onClickButton = () => {
    onClickButtons(registrationStatus)
  }

  return (
    <li>
      <button type="button" className="button" onClick={onClickButton}>
        <img src={imageUrl} alt="event" className="event-image" />
      </button>
      <p className="event-heading">{name}</p>
      <p className="event-paragraph">{location}</p>
    </li>
  )
}
export default EventItem
