import React from 'react';
import { FaStar } from 'react-icons/fa';
import { IoSearch } from 'react-icons/io5';
import { FaRegBell } from 'react-icons/fa6';
import Akarsh_Image from '../../components/imgs/Akarsh_Image.jpg'

const Navbar2 = () => {
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#FFE4E4', height: '13vh' }}>
        <div style={{ marginLeft: '5%', fontSize: '2.5rem' }}>
          <FaStar />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', gap: '4rem', marginRight: '5%' }}>
          <div style={{ display: 'flex', alignItems: 'center',justifyContent:'center',gap:'4vw' }}>
              <a href="/" style={{ fontWeight: '600', fontSize: '2.3rem',textDecoration: 'none', color: 'inherit' }}>Job Listings</a>
              <a href="/" style={{ fontWeight: '600', fontSize: '2.3rem',textDecoration: 'none', color: 'inherit' }}>Industry Experts</a>
              <a href="/" style={{ fontWeight: '600', fontSize: '2.3rem',textDecoration: 'none', color: 'inherit' }}>Workshops</a>
              <a href="/" style={{ fontWeight: '600', fontSize: '2.3rem',textDecoration: 'none', color: 'inherit' }}>Internships</a>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '3rem', fontSize: '2.2rem' }}>
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
