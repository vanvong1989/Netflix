import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import hero_Banner from '../../assets/hero_banner.jpg'
import hero_title from '../../assets/hero_title.png'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
import TitleCards from '../../components/TitleCards/TitleCards'
import Footer from '../../components/Footer/Footer'


const Home = () => {
  return (
    <div className="home">
       <Navbar />
       <div className='hero'>
         <img src={hero_Banner} alt='' className='banner-img' />
         <div className='hero-caption'>
          <img src={hero_title} alt='' className='caption-img' />
          <p>Discovering his ties to a secret ancient oreer, a young
            man living in modern Istanbul embark on a quest to save the 
            city from an immortal enemy.
          </p>
          <div className='hero-btns'>
            <button className='btn'> play
              <img src={play_icon} alt='' />
            </button>
            <button className='btn dark-btn'> More Info
              <img src={info_icon} alt='' />
            </button>
          </div>
          <TitleCards />
         </div>
       </div>
       <div className='more-cards'>
       <TitleCards title={"Blockbuster Movies"} category={"top_rated"} />
       <TitleCards title={"Only on Netflix"} category={"popular"} />
       <TitleCards title={"Upcoming"} category={"upcoming"} />
       <TitleCards title={"Top Pics for you"} category={"now_playing"} />
       </div>
       <Footer />
    </div>
  )
}

export default Home
