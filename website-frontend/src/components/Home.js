// @nhomnhomm Complete this
import cover from '../images/cover.png'
import decoration from '../images/decoration.png'

const Hero = ({vw, vh}) => {
    return (
        <div className="container">
            <div className="row vh-100 align-items-center">
                <div className="col-5">
                    <h1 className="text-secondary">Fulbright <br></br> STEM Club.</h1>
                    <h2 className="text-primary">Leaders of the next <br></br> technological revolution</h2>
                </div>
                <div className="col-7 position-relative">
                    <img src={decoration} alt="Decoration" width="20%" className="position-absolute top-50 z-index-1"></img>
                    <img src={cover} alt="Cover" width="80%"></img>
                </div>
            </div>
        </div>
    )
}


const Home = () => {
    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
    const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)

    return (
        <Hero vw = {vw} vh = {vh}/>
    )
}

export default Home