import './index.css'

const HistoryItem = props => {
  const {searchDetails, onDeleteItem} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = searchDetails

  const onDelete = () => {
    onDeleteItem(id)
  }

  return (
    <li className="list-item-container">
      <div className="time-container">
        <p className="time">{timeAccessed}</p>
        <div className="item">
          <img src={logoUrl} alt="domain logo" className="image" />
          <p className="title">{title}</p>
          <p className="link">{domainUrl}</p>
        </div>
      </div>
      <div className="btn-container">
        <button
          data-testid="delete"
          className="btn"
          type="button"
          onClick={onDelete}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            className="btn-img"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default HistoryItem
