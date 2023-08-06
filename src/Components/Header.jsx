
import TrollFace from '../assets/troll-face.png'


function Header() {
  return (
    <header className="header">
        <img src={TrollFace} className='header-image' alt="" />
        <h2 className='header-title'>Meme Generator</h2>
        <h3 className='header-project'>React Course - Project 3</h3>
    </header>
  )
}

export default Header