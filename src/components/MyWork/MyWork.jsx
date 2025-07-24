import './MyWork.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import MyWork_data from '../../assets/mywork_data'
import arrow_icon from '../../assets/arrow_icon.svg'
const MyWork = () => {
  return (
    <div className='my-work' id='work'>
        <div className="my-work-title">
            <h1>My Latest Work</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="my-work-container">
            {MyWork_data.map((work, index)=>{
                return(
                    <img src={work.w_img} key={index} alt="" />
                )
            })}
        </div>
        <div className="my-work-show-more">
            <p>Show More</p>
            <img src={arrow_icon} alt="" />
        </div>
    </div>
  )
}

export default MyWork