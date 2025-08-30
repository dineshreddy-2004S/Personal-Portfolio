import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_image from '../../assets/img1.jpg'
const About = () => {
  return (
    <div className='about' id='about'>
        <div className="about-title">
            <h1>About me</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={profile_image} alt="" width='300px' />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>I am aspiring for Full Stack Web Developer. I am passionate in this field and i love to develop and know new things. I am from B.com Background but i am confident in Web Development. I was created some frontend websites using HTML, CSS and JavaScript.</p>
                    <p>My passion for frontend developer is not only reflected in my extensive but also the dedication. I bring to each project.</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill">
                        <p>HTML & CSS <span> 90%</span></p>
                        <hr style={{width:"90%"}} />
                    </div>
                    <div className="about-skill">
                        <p>React JS <span>75%</span></p>
                        <hr style={{width:"70%"}} />
                    </div>
                    <div className="about-skill">
                        <p>JavaScript <span>80%</span></p>
                        <hr style={{width:"73%"}} />
                    </div>
                    <div className="about-skill">
                        <p>Java <span>60%</span></p>
                        <hr style={{width:"60%"}} />
                    </div>
                    <div className="about-skill">
                        <p>Git & GitHub <span>90%</span></p>
                        <hr style={{width:"90%"}} />
                    </div>
                </div>
            </div>
        </div>
        <div className="about-achievements">
            <div className="about-achievement">
                <h1>02+</h1>
                <p>Years of Experience</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>10+</h1>
                <p>PROJECTS COMPLETED</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>10+</h1>
                <p>PROJECTS COMPLETED</p>
            </div>
        </div>
    </div>
  )
}

export default About