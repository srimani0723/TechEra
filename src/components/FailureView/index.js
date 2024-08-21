import './index.css'

const FailureView = props => {
  const {retry} = props

  const onRetry = () => {
    retry()
  }

  return (
    <div className="fv-box">
      <img
        className="fv-img"
        src="https://assets.ccbp.in/frontend/react-js/tech-era/failure-img.png"
        alt="failure view"
      />
      <h1 className="fv-h1">Oops! Something Went Wrong</h1>
      <p className="fv-p">
        We cannot seem to find the page you are looking for
      </p>
      <button className="fv-btn" type="button" onClick={onRetry}>
        Retry
      </button>
    </div>
  )
}

export default FailureView
