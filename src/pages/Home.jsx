import Banner from "./Banner"
import HotJobs from "./HotJobs"

const Home = () => {
  return (
    <div>
      <Banner/>
      <div className="my-8">
      <HotJobs/>
      </div>
    </div>
  )
}

export default Home