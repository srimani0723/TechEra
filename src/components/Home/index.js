import {Component} from 'react'

import Navbar from '../Navbar'
import LoaderView from '../Loader'
import Course from '../Course'
import FailureView from '../FailureView'

import './index.css'

const apiStatusConstraints = {
  initial: 'INITIAL',
  inProcess: 'IN_PROCESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Home extends Component {
  state = {
    apiStatus: apiStatusConstraints.initial,
    list: [],
  }

  componentDidMount() {
    this.getList()
  }

  getList = async () => {
    this.setState({
      apiStatus: apiStatusConstraints.inProcess,
    })

    const url = 'https://apis.ccbp.in/te/courses'
    const response = await fetch(url)
    if (response.ok) {
      const data = await response.json()
      const newData = data.courses.map(each => ({
        id: each.id,
        logoUrl: each.logo_url,
        name: each.name,
      }))

      this.setState({
        apiStatus: apiStatusConstraints.success,
        list: newData,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstraints.failure,
      })
    }
  }

  renderSuccesView = () => {
    const {list} = this.state

    return (
      <>
        <h1 className="h-heading">Courses</h1>
        <ul className="h-courses">
          {list.map(each => (
            <Course item={each} key={each.id} />
          ))}
        </ul>
      </>
    )
  }

  renderStatus = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstraints.inProcess:
        return <LoaderView />
      case apiStatusConstraints.success:
        return this.renderSuccesView()
      case apiStatusConstraints.failure:
        return <FailureView retry={this.getList} />
      default:
        return null
    }
  }

  render() {
    return (
      <>
        <Navbar />
        <div className="h-bottom-part">{this.renderStatus()}</div>
      </>
    )
  }
}
export default Home
