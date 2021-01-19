import Information from './Information'
import CreateRequest from './CreateRequest'
import '../style/App.css';
function Home() {
    return (
        <div className="app_body">
            <div className="app__container">
              <Information/>
              <CreateRequest/>
            </div>
        </div>
    )
}

export default Home;


