import Loader from 'react-loader-spinner'

const styling = {
  height: '90vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}

const LoaderView = () => (
  <div data-testid="loader" style={styling}>
    <Loader type="ThreeDots" color="#4656a1" height={50} width={50} />
  </div>
)

export default LoaderView
