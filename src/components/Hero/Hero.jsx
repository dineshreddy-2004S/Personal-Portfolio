import profile_img from '../../assets/myImage.jpeg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import './Hero.css'
const Hero = () => {
  return (
    <div className='hero' id='home'>
        <img src={profile_img} alt="" />
        <h1><span>I am DINESH REDDY, </span> Passionate in Frontend Development.</h1>
        <p>I am aspiring for Frontend Web Developer. I had good knowledge on HTML, CSS, JavaScript and React JS</p>
        <div className='hero-action'>
            <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
            <div className="hero-resume">My resume</div>
        </div>
    </div>
  )
}

export default Hero