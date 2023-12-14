import React from 'react'

import { MdGroups } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { MdOutlinePermMedia } from "react-icons/md";
import { MdOutlineEventNote } from "react-icons/md";
import './First.css';
import Akarsh_Image from '../../components/imgs/Akarsh_Image.jpg';
import PostList from './PostList';




const First = () => {
  return (
    <>
      <div style={{background:'#FAD2D2'}}>
        <h1 style={{color:'#004080',textAlign:'center',fontSize:'4.5rem',padding:'4vh 0vw'}}>Connect and Collaborate</h1>
        <div style={{display:'flex', justifyContent:'space-evenly',marginTop:'50px'}}>
          {/* left */}
          <div style={{background:'#FFE4E4',borderRadius:'20px',width:'20%',height:'50vh',display:'flex',justifyContent:'center',alignItems:'center'}}>
            <div style={{background:'white',height:'90%',borderRadius:'1rem',width:'87%'}}>
                <div style={{display:'flex',justifyContent:'center', alignItems:'center',marginTop:'2vh',}}>
                    <h5 style={{fontWeight:'bold',fontSize:'1.8rem'}}>My Groups</h5>
                </div>
                <div className="mygroupsFirstpg">
                    <div style={{fontSize:'2vw',display:'flex',justifyContent:'space-evenly',margin:'2vh 0'}}>
                      <MdGroups />
                      <MdGroups />
                  </div>
                  <div style={{fontSize:'2vw',display:'flex',justifyContent:'space-evenly'}}>
                      <MdGroups />
                      <MdGroups />
                  </div>
                </div>
                
                <div>
                  <div style={{display:'flex',justifyContent:'center', alignItems:'center',marginTop:'5vh'}}>
                      <h5 style={{fontWeight:'bold',fontSize:'1.8rem'}}>My Events</h5>
                  </div>
                  <div style={{fontSize:'2vw',display:'flex',justifyContent:'space-evenly',margin:'2vh 0'}}>
                    <SlCalender />
                    <SlCalender />
                  </div>
                  <div style={{fontSize:'2vw',display:'flex',justifyContent:'space-evenly',marginTop:'4px'}}>
                    <SlCalender />
                    <SlCalender />
                  </div>
                </div>
            </div>
          </div>
          {/* mid */}
          <div className="midcontainerfirstpg">
            <div style={{background:'#FFE4E4',height: '28vh',width: '40vw',borderRadius:'1rem',paddingTop:'0.5vw'}}>
              <div style={{display:'flex',alignContent:'center',paddingInline:'1vw'}}>
                <div style={{paddingInline:'1.5vw',marginRight:'1vw',marginTop:'2vh'}}>
                    <img src={Akarsh_Image} alt="" style={{width:'8vw',height:'16vh',borderRadius:'50%'}}/>
                </div>
                <div style={{marginTop:'15px',}}>
                    <label htmlFor='search'></label>
                    <input id='search' placeholder='Create Post...' style={{background:'white', borderRadius:'1rem',height:'16vh',width:'25vw',paddingLeft:'2vw',fontSize:'1.8vw',border:'none'}}></input>
                </div>
              </div>
              <div style={{display:'flex',fontSize:'1.5rem',marginLeft:'42%'}}>
                <span style={{display:'flex',justifyContent:'space-evenly',gap:'10px',marginTop:'15px'}}> <MdOutlinePermMedia style={{marginTop:'6px',fontSize:'2.5rem'}}/>Media</span>        
                <span style={{display:'flex',justifyContent:'space-evenly',gap:'10px',marginTop:'15px',marginLeft:'2vw'}}> <MdOutlineEventNote style={{marginTop:'6px',fontSize:'2.5rem'}}/>Event</span>   
              </div>
            </div>
            <div style={{display:'flex',justifyContent:'center', alignItems:'center',marginTop:'8vh'}}>
              <PostList />
            </div>
          </div>
          
          {/* right */}
          <div style={{background:'#FFE4E4',height:'50vh',borderRadius:'1rem',width:'20%',display:'flex',justifyContent:'center',alignItems:'center'}}>
              <div style={{background:'white',height:'90%',borderRadius:'1rem',width:'87%',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
                <h5 style={{display:'flex',justifyContent:'center', alignItems:'center',fontWeight:'bold',fontSize:'1.8rem'}}>Top News</h5>
                <div className="newsfirstprofpg" style={{background:'#FFE4E4',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'space-evenly',width:'85%',height:'85%',borderRadius:'1rem',fontSize:'1.5rem'}}>
                  <a href="#">News1</a>
                  <a href="#">News2</a>
                  <a href="#">News3</a>
                  <a href="#">News4</a>
                  <a href="#">News5</a>
                </div>
              </div>
            </div>
        </div>
        
      </div>
    </>
  )
}

export default First
