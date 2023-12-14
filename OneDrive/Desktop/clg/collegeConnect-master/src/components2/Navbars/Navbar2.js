import React from 'react';
import { FaStar } from 'react-icons/fa';
import { BiSolidMessageRounded } from 'react-icons/bi';
import { BsBriefcaseFill } from 'react-icons/bs';
import { IoSearch } from 'react-icons/io5';
import { FaRegBell } from 'react-icons/fa6';
import { MdGroups } from 'react-icons/md';
import Akarsh_Image from '../../components/imgs/Akarsh_Image.jpg'

const Navbar2 = () => {
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#FFE4E4', height: '13vh' }}>
        <div style={{ marginLeft: '5%', fontSize: '2.5rem' }}>
          <FaStar />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', gap: '4rem', marginRight: '5%' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <ul style={{ listStyleType: 'none', margin: 0, padding: 0 }}>
              <a href="#" style={{ fontWeight: '600', fontSize: '2.3rem',textDecoration:'none',color:'inherit' }}>Events</a>
            </ul>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '3.5rem', fontSize: '2.2rem' }}>
            <a href="#" style={{color:'inherit'}}><MdGroups /></a>
            <a href="#" style={{color:'inherit'}}><BiSolidMessageRounded /></a>
            <a href="#" style={{color:'inherit'}}><BsBriefcaseFill /></a>
            <a href="#" style={{color:'inherit'}}><IoSearch /></a>
            <a href="#" style={{color:'inherit'}}><FaRegBell /></a>
            
            <img src={Akarsh_Image} alt="" style={{width:'4vw',height:'7vh',borderRadius:'50%'}}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar2;
