// @nhomnhomm Complete this
import logo from '../images/stem-club-logo.png'
import SectionHeader from './utils/SectionHeader'
import background from '../images/background.png'
import intellectual from '../images/intellectual.jpg'
import career from '../images/career.jpg'
import community from '../images/community.jpg'
import connected from '../images/connected.jpg'
import dummy1 from '../images/blog-picture1.png'

const Hero = () => {
    return (
        <div className="container-fluid hero-full-height p-4" style={{ backgroundImage: `url(${background})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
            <div className="row h-100 align-items-center">
                <div className="col-2">

                </div>
                <div className="col-12 col-md-8 h-100 d-flex flex-column justify-content-center align-items-center text-center my-auto">
                    <img src={logo} width = "200" height = "200" alt ="Logo" className="mb-3 d-none d-md-block"></img>
                    <div className="align-middle">
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
        <div className="mt-4 container">
            <SectionHeader text="Mission" />
            <div className="">
                <p>The world is evolving in unexpected ways. Fulbright is built to close the gap between higher education and Vietnam’s greatest needs. One of such needs is quality human resources for the technological revolution.</p>
                <p>Fulbright STEM Club is an incubator of future leaders for the next technological revolution. By 2025, Fulbright STEM Club will be one of the most innovative and vibrant STEM communities for Vietnamese youth.</p>
            </div>
        </div>
    ) 
}

const Value = ({value, description, img}) => {
    return (
        <div className="col-12 col-md-6 text-center">
            <img src={img} width="100%" alt="" class="rounded"></img>
            <h5 className="text-primary fw-bold mt-2">{value}</h5>
            <p className="text-primary">{description}</p>
        </div>
    )
}

const CoreValues = () => {
    return (
        <div className="container">
            <SectionHeader text="Core Values" />
            <div className="row gx-5">
                <Value img={community} value="Community-minded" description="We solve real problems in our community"/>
                <Value img={connected} value="Connected" description="We help great minds meet, network, and socialize"/>
                <Value img={intellectual} value="Intelltecually curious" description="We create innovative STEM-powered products"/>
                <Value img={career} value="Career-oriented" description="We equip members with essential hard skills for future carrer"/>
            </div>
        </div>
    )
}

const PostPreview = ({title, category}) => {
    return (
        <div className="col-md-4 py-3">
            <img src={dummy1} width="100%" alt=""></img>
            <p className="text-primary mt-2 text-decoration-underline">{title}</p>
            <span className="text-primary bg-secondary p-2 rounded">{category}</span>
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
        <div>
            <Hero/>
            <Mission/>
            <CoreValues/>
            {/* <LatestUpdates/> */}
        </div>
    )
}

export default Home