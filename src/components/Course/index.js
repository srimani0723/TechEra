import {Link} from 'react-router-dom'

import './index.css'

const Course = props => {
  const {item} = props
  const {id, name, logoUrl} = item

  const styling = {
    textDecoration: 'none',
    width: '150px',
  }

  return (
    <Link to={`/courses/${id}`} style={styling}>
      <li className="c-li">
        <img className="c-img" src={logoUrl} alt={name} />
        <p className="c-p">{name}</p>
      </li>
    </Link>
  )
}

export default Course
