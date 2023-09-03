
// Imported assets ===========================================================>

import video from '../../assets/img/156855 (1080p).mp4'
import air from '../../assets/img/aeroplane.png'

const Home = () => {
    return (
        <div className="home flex container">
            <div className="mainText">
                <h1>Create Ever-lasting Memories With Us</h1>
            </div>
            <div className="homeImages flex">
                <div className="videoDiv">
                    <video src={video} autoPlay muted loop className="video"></video>
                </div>

                <img src={air} className="plane" />
            </div>
        </div>
    )
}

export default Home