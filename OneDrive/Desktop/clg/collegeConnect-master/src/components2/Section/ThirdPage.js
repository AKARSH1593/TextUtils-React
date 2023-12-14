import React from 'react'
import Navbar3 from '../Navbars/Navbar3'

const ThirdPage = () => {
  return (
    <div style={{background:'#FAD2D2'}}>
      <Navbar3/>
      <div style={{marginTop:'3vh',display:'flex', justifyContent:'center'}}>
        <h1 style={{color:'#004080',fontSize:'4.5rem'}}>Your Path to Professional Excellence</h1>
      </div>
      <div style={{display:'flex', justifyContent:'space-evenly', alignItems:'center'}}>
        {/* left side */}
        <div>
            <div>
                <img src='https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=450&h=250&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dHlwaW5nJTIwbWFufGVufDB8fDB8fHww' alt='images1' style={{borderRadius:'2rem',height:'40vh',width:'25vw',margin:'2vh 0'}}/>
            </div>
            <div>
                <img src='https://images.unsplash.com/photo-1521790361543-f645cf042ec4?w=450&h=250&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHR5cGluZyUyMG1hbnxlbnwwfHwwfHx8MA%3D%3D' alt='images2' style={{borderRadius:'2rem',height:'40vh',width:'25vw',marginBottom:'2vh'}}/>
            </div>
            <div>
                <img src='https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?w=450&h=250&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHR5cGluZyUyMG1hbnxlbnwwfHwwfHx8MA%3D%3D' alt='images3' style={{borderRadius:'2rem',height:'40vh',width:'25vw',marginBottom:'2vh'}}/>
            </div>
        </div>
        {/* right side */}
        <div>
            <div style={{background:"#5383FF",borderRadius:"1rem",display:"flex",justifyContent:"center",alignItems:'center',marginTop:'3vh',marginBottom:"-30px"}}>
                <h3 style={{fontSize:'2rem'}}>"FORGE YOUR FUTURE: YOUR CAREER AWAITS."</h3>
            </div>
            <div style={{display:'flex',alignItems:'center',marginTop:'50px'}}>
                <div style={{background:'#D2F2F2',height:'30vh',width:'15vw',padding:'10px'}}>
                    <h5 style={{color:'#004080',fontSize:'1.5rem'}}>Resume Builder</h5>
                    <ul>
                        <li>Access <br/> comprehensive <br/> lecture notes.</li>
                        <li>Contribute your <br/> own notes.</li>
                    </ul>
                </div>
                <div style={{background:'#A8B49A',height:'30vh',width:'15vw',padding:'10px'}}>
                    <h5 style={{color:'#004080',fontSize:'1.5rem'}}>Career Path Resources</h5>
                    <ul>
                        <li>Engage with shared <br/> resources.</li>
                        <li>Discuss and<br/> collaborate with <br/> peers.</li>
                    </ul>
                </div>
                <div style={{background:'#D2F2F2',height:'30vh',width:'15vw',padding:'10px'}}>
                    <h5 style={{color:'#004080',fontSize:'1.5rem'}}>Professional Development Courses</h5>
                    <ul>
                        <li>Refer to the previous year's <br/> exam papers.</li>
                        <li>Contribute your <br/> own papers.</li>
                    </ul>
                </div>
            </div>
            <div style={{display:'flex',alignItems:'center',marginTop:'50px'}}>
                <div style={{background:'#D2F2F2',height:'30vh',width:'15vw',padding:'10px'}}>
                    <h5 style={{color:'#004080',fontSize:'1.5rem'}}>Professional Toolkit</h5>
                    <ul>
                        <li>Access <br/> comprehensive <br/> lecture notes.</li>
                        <li>Contribute your <br/> own notes.</li>
                    </ul>
                </div>
                <div style={{background:'#A8B49A',height:'30vh',width:'15vw',padding:'10px'}}>
                    <h5 style={{color:'#004080',fontSize:'1.5rem'}}>Career Path Resources</h5>
                    <ul>
                        <li>Engage with shared <br/> resources.</li>
                        <li>Discuss and<br/> collaborate with <br/> peers.</li>
                    </ul>
                </div>
                <div style={{background:'#D2F2F2',height:'30vh',width:'15vw',padding:'10px'}}>
                    <h5 style={{color:'#004080',fontSize:'1.5rem'}}>Professional Development Courses</h5>
                    <ul>
                        <li>Refer to the previous year's <br/> exam papers.</li>
                        <li>Contribute your <br/> own papers.</li>
                    </ul>
                </div>
            </div>
            <div style={{marginTop:'20px'}}>
                <span style={{display:'flex',justifyContent:'center',alignItems:'center',color:'#004080',background:'white',width:'45vw',height:'7rem',fontSize:'3rem',borderRadius:'0.5rem',fontWeight:'600'}}>Resume Builder</span>
            </div>
            <div style={{marginTop:'20px'}}>
                <span style={{display:'flex',justifyContent:'center',alignItems:'center',color:'#004080',background:'white',width:'45vw',height:'7rem',fontSize:'3rem',borderRadius:'0.5rem',fontWeight:'600'}}>Industry Experts</span>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ThirdPage
