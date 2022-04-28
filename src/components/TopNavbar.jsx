import useDetectOutside from '../customHook/useDetectOutside'
import Youtube from '../assets/images/youtube.svg'
import CameraVideo from '../assets/images/cameraVideo.svg'
import GridApp from '../assets/images/gridApp.svg'
import Bell from '../assets/images/bell.svg'
import Profile from '../assets/images/channels4_profile.jpg'
import { AiOutlineMenu, AiOutlineSearch } from 'react-icons/ai'
import { BsKeyboard, BsMicFill } from 'react-icons/bs'

const TopNavbar = () => {
  const handleOutside = () => {
    const searchElement = document.querySelector('.search__area');
    const spanElement = document.querySelector('.search__area span');
    spanElement.style.display = 'none';
    searchElement.classList.remove("ring-1", "ring-blue-400");
  }
  const ref = useDetectOutside(handleOutside);
  const handleAddRing = () => {
    const searchElement = document.querySelector('.search__area');
    const spanElement = document.querySelector('.search__area span');
    spanElement.style.display = 'block';
    searchElement.classList.add("ring-1", "ring-blue-400");
    searchElement.classList.toggle("ml-0");
  }
  return (
    <div className='w-screen h-18 fixed top-0 left-0 right-0 bg-highDarkBlack py-3 px-4 flex gap-10 items-center justify-between'>
      <div id="menu" className='w-40 h-full flex gap-7 items-center'>
        <button id='menu-icon' className=' text-white'><AiOutlineMenu className='w-6 h-6' /></button>
        <a href="#" className='w-32'><img src={Youtube} alt="" className='' /></a>
      </div>

      <div id="search" className='flex ' >
        <div className="search__area relative flex justify-start ml-10">
          <span className='hidden w-10 min-h-full bg-lowDarkBlack flex'><AiOutlineSearch id='search-icon' className=' p-1 self-center  w-full h-full text-3xl text-white ' /></span>
          <input type="text" ref={ref} placeholder='Tìm kiếm' className='py-2 px-2 text-white w-80  bg-lowDarkBlack  focus:outline-none' onClick={handleAddRing} />
          <a href=""><BsKeyboard className='absolute top-0 right-3 h-full w-6 text-white' />  </a>
        </div>
        <button className=' w-md min-h-full bg-gray-700 py-1 px-4 text-2xl text-white'><AiOutlineSearch id='search-icon' /></button>
        <button className='rounded-full p-3 ml-3 bg-lowDarkBlack text-white text-md'><BsMicFill /></button>
      </div>

      <div id="helper" className='flex space-x-1.5'>
        <button className='transition duration-200 h-full w-10 rounded-full p-2 active:bg-black'><img src={CameraVideo} alt="" /></button>
        <button className='transition duration-200 h-full w-10 rounded-full p-2 active:bg-black'><img src={GridApp} alt="" /></button>
        <button className='transition duration-200 h-full w-10 rounded-full p-2 active:bg-black'><img src={Bell} alt="" /></button>
        <button className='transition duration-200 h-full w-10 rounded-full p-2 active:bg-black'><img src={Profile} className='rounded-full' alt="" /></button>
      </div>
    </div>

  )
}

export default TopNavbar