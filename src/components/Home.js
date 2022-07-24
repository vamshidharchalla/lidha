import DashboardBottom from "./DashboardBottom";
import LandingPage from "./LandingPage";
import SlideShow from "./SlideShow";

const Home = () => {
    // Taking values from store/ context
    
    return (
        <div className="lidha-container">
        <section>
          <LandingPage />
        </section>
        <section>
          <SlideShow />
        </section>
        <section>
          <DashboardBottom />
        </section>
          
          
          
        </div>
    )
}
export default Home;