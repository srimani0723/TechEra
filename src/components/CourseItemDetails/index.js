import {Component} from 'react'

import Navbar from '../Navbar'
import LoaderView from '../Loader'
import FailureView from '../FailureView'
import CourseItem from '../CourseItem'

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
    list: {},
  }

  componentDidMount() {
    this.getList()
  }

  getList = async () => {
    this.setState({
      apiStatus: apiStatusConstraints.inProcess,
    })
    const {match} = this.props
    const {params} = match
    const {id} = params

    const url = `https://apis.ccbp.in/te/courses/${id}`

    const response = await fetch(url)
    if (response.ok) {
      const data = await response.json()
      const newData = {
        id: data.course_details.id,
        imageUrl: data.course_details.image_url,
        name: data.course_details.name,
        description: data.course_details.description,
      }

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
      <div className="cid-courses">
        <CourseItem item={list} />
      </div>
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
        <div className="cid-bp">{this.renderStatus()}</div>
      </>
    )
  }
}
export default Home
