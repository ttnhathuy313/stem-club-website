// @nhomnhomm Complete this
import cover from '../images/cover.png'
import decoration from '../images/decoration.png'

const Hero = () => {
    return (
        <div className="container" id="hero">
            <div className="row vh-100 align-items-center">
                <div className="col-5">
                    <h1 className="text-secondary">Fulbright <br></br> STEM Club.</h1>
                    <h2 className="text-primary">Leaders of the next <br></br> technological revolution</h2>
                </div>
                <div className="col-7">
                    <img src={cover} alt="Cover" width="80%" className="position-relative start-10"></img>
                    <img src={decoration} alt="Decoration" width="20%" className="position-relative start-n80"></img>
                </div>
            </div>
        </div>
    )
}


const Home = () => {
    return (
        <Hero/>
    )
}

export default Home