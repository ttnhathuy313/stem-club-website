// @nhomnhomm Complete this
import logo from '../images/stem-club-logo.png'

const Hero = () => {
    return (
        <div className="container-fluid bg-primary hero-full-height p-4">
            <div className="row h-100 align-items-center">
                <div className="col-2">

                </div>
                <div className="col-8 h-100 align-items-center text-center">
                    <img src={logo} width = "200" height = "200" alt ="Logo" className="position-relative top-10"></img>
                    <div className="position-relative top-20">
                        <h1 className="text-white fw-bold">Fulbright STEM Club</h1>
                        <h3 className="text-white">Leaders of the next technological revolution</h3>
                    </div>
                </div>
                <div className="col-2">

                </div>
            </div>
        </div>
    )
}

const Mission = () => {
    return (
        <div className="container-fluid p-5">
            <div className="row align-items-center">
                <div className="col-2"></div>
                <div className="col-8">
                    <h2 className="text-primary fw-bold text-center mb-4">Mission</h2>
                    <p className="text-primary">The world is evolving in unexpected ways. Fulbright is built to close the gap between higher education and Vietnam’s greatest needs. One of such needs is quality human resources for the technological revolution.</p>
                    <p className="text-primary">Fulbright STEM Club is an incubator of future leaders for the next technological revolution. By 2025, Fulbright STEM Club will be one of the most innovative and vibrant STEM communities for Vietnamese youth.</p>
                </div>
                <div className="col-2"></div>
            </div>
        </div>
    ) 
}

const Value = ({value, description}) => {
    return (
        <div className="col-md-3">
            <img src={logo} width = "50" height = "50" alt=""></img>
            <h4 className="text-primary fw-bold">{value}</h4>
            <p className="text-primary">[{description}]</p>
        </div>
    )
}

const CoreValues = () => {
    return (
        <div className="container full-height p-4">
            <div className="row justify-content-center">
                <div className="btn btn-primary w-50 border-radius">
                    <h3 className="fw-bold m-0">Core Values</h3>
                </div>
            </div>
            <div className="row overflow-auto h-100 align-items-center justify-content-center">
                <div className="row text-center justify-content-center">
                    <Value value="Community-minded" description="We solve real problems in our community"/>
                    <Value value="Connected" description="We help great minds meet, network, and socialize"/>
                </div>
                <div className="row text-center justify-content-center">
                    <Value value="Intelltecually curious" description="We create innovative STEM-powered products"/>
                    <Value value="Career-oriented" description="We equip members with essential hard skills for future carrer"/>
                </div>
            </div>
        </div>
    )
}

const PostPreview = ({title, category}) => {
    return (
        <div className="col-md-3">
            <img src={logo} width = "50" height = "50" alt=""></img>
            <h4 className="text-primary fw-bold">{title}</h4>
            <p className="text-secondary fw-bold">{category}</p>
        </div>
    )
}

const LatestUpdates = () => {
    return (
        <div className="container p-4">
            <div className="row justify-content-center">
                <div className="btn btn-primary w-50 border-radius mb-4">
                    <h3 className="fw-bold m-0">Core Values</h3>
                </div>
            </div>
            <div className="row overflow-auto justify-content-center">
                <PostPreview title="Trivia Night at Fulbright - an annual playground for STEM enthusiasts" category="Activities"/>
                <PostPreview title="Trivia Night at Fulbright - an annual playground for STEM enthusiasts" category="Activities"/>
                <PostPreview title="Trivia Night at Fulbright - an annual playground for STEM enthusiasts" category="Activities"/>
            </div>
        </div>
    )
}

const Home = () => {
    return (
        <>
            <Hero/>
            <Mission/>
            <CoreValues/>
            <LatestUpdates/>
        </>
    )
}

export default Home