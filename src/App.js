import React from 'react'
import './App.css';
import Logo from '../src/images/logo.png'
import Pic1 from '../src/images/1.png'
import Pic2 from '../src/images/2.png'
import Pic3 from '../src/images/3.png'
import Pic4 from '../src/images/call.png'
import Pic5 from '../src/images/facebook.png'
import Pic6 from '../src/images/web.png'


const App = () => {
    return (
        <>
            <section id='header'>
            
                   
                <div className='first'>
                    <img src={Logo} alt='cri logo' className='image1' />
                </div>
                                    
                <div className='second col-5 mx-auto'> 
               
                <img src={Pic1} alt="pic1" className='image1 ' />   
                <div>          
                 <h3>C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</h3>
                 <h6>
                    <ul>
                        <li>C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.</li>
                        <li>C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel.</li>
                    </ul>
                  </h6>  
                  <img src={Pic2} alt="pi2" className='image2' />
                  <h6>Government of India has awarded the <strong> "National Energy Conservation Award 2018"</strong>. Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.</h6>
                </div>     
                </div>

                <div>
                <h5>INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION.</h5> 
                </div>
                
                <img src={Pic3} alt="pic1" className='image3 ' />
                <div className='text-align'>
                    <h5>Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors </h5>
                </div>

                 <hr className='one'></hr>

                 <div className='text-align'>
                     <h3>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</h3>
                 </div>
                
                <div className='align2'>
                CHEMICALS & PROCESS &nbsp;<span className='vline' />&nbsp;POWER WATER & WASTE WATER&nbsp;<span className='vline' /> &nbsp;OILS & GAS&nbsp;<span className='vline' />&nbsp;PHARMA&nbsp;<span className='vline' />&nbsp;SUGARS & DISTILLERIES&nbsp;<span className='vline' />&nbsp;PAPER & PULP&nbsp;<span className='vline' />&nbsp;MARINE & DEFENCE&nbsp;<span className='vline' />&nbsp;METAL & MINING&nbsp;<span className='vline' />&nbsp;FOOD & BEVERAGE&nbsp;<span className='vline' />&nbsp;PETROCHEMICAL & REFINERIES&nbsp;<span className='vline' />&nbsp;SOLAR&nbsp;<span className='vline' />&nbsp;BUILDING&nbsp;<span className='vline' />&nbsp;HVAC&nbsp;<span className='vline' />&nbsp;FIRE FIGHTING&nbsp;<span className='vline' />&nbsp;AGRICULTURE & RESIDENTIAL&nbsp;
                </div>

                <div className='box'>
                <p className='box-text'> <img src={Pic4} alt="" className='box-image'/> Toll Free 1800 200 1234 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src={Pic5} alt="" className='box-image'/>facebook.com/cripumps&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src={Pic6} alt="" className='box-image'/>www.crigroups.com&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                
                </div>
                                
                 
            </section>
        
        </>
        
    );
};

export default App;
