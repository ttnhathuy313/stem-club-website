// @nhomnhomm Complete this
import logo from '../images/stem-club-logo.png'
import SectionHeader from './utils/SectionHeader'
import intellectual from '../images/intellectual.png'
import career from '../images/career.png'
import community from '../images/community.png'
import connected from '../images/connected.png'
import dummy1 from '../images/dummy1.png'

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
        <div className="mt-4">
            <SectionHeader text="Misison" />
            <div className="col-8 mx-auto">
                <p>The world is evolving in unexpected ways. Fulbright is built to close the gap between higher education and Vietnam’s greatest needs. One of such needs is quality human resources for the technological revolution.</p>
                <p>Fulbright STEM Club is an incubator of future leaders for the next technological revolution. By 2025, Fulbright STEM Club will be one of the most innovative and vibrant STEM communities for Vietnamese youth.</p>
            </div>
        </div>
    ) 
}

const Value = ({value, description, img}) => {
    return (
        <div className="col-md-3">
            <img src={img} height="148" alt=""></img>
            <h5 className="text-primary fw-bold mt-2">{value}</h5>
            <p className="text-primary">{description}</p>
        </div>
    )
}

const CoreValues = () => {
    return (
        <div className="">
            <SectionHeader text="Core Values" />
            <div className="row overflow-auto h-100 align-items-center justify-content-center">
                <div className="row text-center justify-content-center">
                    <Value img={community} value="Community-minded" description="We solve real problems in our community"/>
                    <Value img={connected} value="Connected" description="We help great minds meet, network, and socialize"/>
                </div>
                <div className="row text-center justify-content-center">
                    <Value img={intellectual} value="Intelltecually curious" description="We create innovative STEM-powered products"/>
                    <Value img={career} value="Career-oriented" description="We equip members with essential hard skills for future carrer"/>
                </div>
            </div>
        </div>
    )
}

const PostPreview = ({title, category}) => {
    return (
        <div className="col-md-3">
            <img src={dummy1} width="100%" alt=""></img>
            <h5 className="text-primary mt-2">{title}</h5>
            <span className="text-secondary bg-primary p-2 rounded">{category}</span>
        </div>
    )
}

const LatestUpdates = () => {
    return (
        <div className="container p-4">
            <SectionHeader text="Latest updates" />
            <div className="row justify-content-center">
                <PostPreview title="Trivia Night just happened" category="Activities"/>
                <PostPreview title="STEM Gathering today!" category="Activities"/>
                <PostPreview title="Phuc Le and Lan Phuc are not twins :)" category="Breaking news"/>
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