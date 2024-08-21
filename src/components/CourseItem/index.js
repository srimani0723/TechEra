import './index.css'

const CourseItem = props => {
  const {item} = props
  const {name, imageUrl, description} = item

  return (
    <div className="ci-div">
      <img className="ci-img" src={imageUrl} alt={name} />
      <div className="ci-content">
        <h1 className="ci-h1">{name}</h1>
        <p className="ci-p">{description}</p>
      </div>
    </div>
  )
}

export default CourseItem
