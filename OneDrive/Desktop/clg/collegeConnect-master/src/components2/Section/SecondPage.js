import React from 'react'
import Navbar2 from '../Navbars/Navbar2'

const SecondPage = () => {
  return (
    <>
        <div style={{background:'#FAD2D2'}}>
        <Navbar2/>
        <div style={{display:'flex',flexDirection:'column', justifyContent:'center', alignItems:'center',background:'#FAD2D2',marginTop:'60px',padding:'10px'}}>
            <div style={{display:'flex',justifyContent:'space-evenly',alignItems:'center'}}>
                <h1 style={{color:'#004080',fontSize:'4.5rem'}}>Welcome to the Academic Resources</h1>
            </div>
            <div style={{display:'flex',alignItems:'center',marginTop:'50px',marginBottom:'15vh'}}>
                <div style={{background:'#D2F2F2',height:'40vh',width:'20vw',padding:'0 2vw'}}>
                    <h5 style={{color:'#004080',fontSize:'1.8rem',textAlign:'center',marginTop:'2vh',marginBottom:'5vh'}}>Lecture Notes</h5>
                    <ul>
                        <li style={{fontSize:'1.5rem'}}>Access comprehensive lecture notes.</li>
                        <li style={{fontSize:'1.5rem'}}>Contribute your own notes</li>
                    </ul>
                </div>
                <div style={{background:'#A8B49A',height:'40vh',width:'20vw',padding:'0 2vw'}}>
                    <h5 style={{color:'#004080',fontSize:'1.8rem',textAlign:'center',marginTop:'2vh',marginBottom:'5vh'}}>Collaborative Learning Environment</h5>
                    <ul>
                        <li style={{fontSize:'1.5rem'}}>Engage with shared resources.</li>
                        <li style={{fontSize:'1.5rem'}}>Discuss and collaborate with peers.</li>
                    </ul>
                </div>
                <div style={{background:'#D2F2F2',height:'40vh',width:'20vw',padding:'0 2vw'}}>
                    <h5 style={{color:'#004080',fontSize:'1.8rem',textAlign:'center',marginTop:'2vh',marginBottom:'5vh'}}>Previous Year Papers</h5>
                    <ul>
                        <li style={{fontSize:'1.5rem'}}>Refer to the previous year's exam papers.</li>
                        <li style={{fontSize:'1.5rem'}}>Contribute your own papers.</li>
                    </ul>
                </div>
                <div style={{background:'#A8B49A',height:'40vh',width:'20vw',padding:'0 2vw'}}>
                    <h5 style={{color:'#004080',fontSize:'1.8rem',textAlign:'center',marginTop:'2vh',marginBottom:'5vh'}}>Study Guides</h5>
                    <ul>
                        <li style={{fontSize:'1.5rem'}}>Explore curated study guides.</li>
                        <li style={{fontSize:'1.5rem'}}>Share your study guides with peers.</li>
                    </ul>
                </div>
            </div>
        </div>
        </div>
    </>
  )
}

export default SecondPage
