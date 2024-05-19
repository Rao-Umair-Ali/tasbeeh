import './login.css'
import './button.css'

//import Input from './input';
import Mybutton from './button';
import { useState } from 'react';
function Login() {
    var [count, setCount] = useState(0);
    return (
        <div className='maindiv'>
            <div className='header'>
                <div className='pickaaba'>
                    <img src={require("../assets/kaaba.jpg")} alt="alternatetext" />
                </div>

                <div className='right'>
                    <div >
                        <h1>Hadith:</h1></div>
                       <div className='paragraph'> <p>It is reported on the authority of Ali that Fatima had corns in her hand because of working at the hand-mill. There had fallen to the lot of Allah's Apostle (ﷺ) some prisoners of war. She (Fatima) came to the Prophet (ﷺ) but she did not find him (in the house). She met A'isha and informed her (about her hardship). When Allah's Apostle (ﷺ) came, she (A'isha) informed him about the visit of Fatima. Allah's Messenger (ﷺ) came to them (Fatima and her family). They had gone to their beds. 'Ali further (reported):

                            We tried to stand up (as a mark of respect) but Allah's Messenger (ﷺ) said: Keep to your beds, and he sat amongst us and I felt the coldness of his feet upon my chest. He then said: May I not direct you to something better than what you have asked for? When you go to your bed, you should recite Takbir (Allah-o-Akbar) thirty-four times and Tasbih (Subhan Allah) thirty-three times and Tahmid (al-Hamdu li-Allah) thirty-three times, and that is better than the servant for you.</p>
                            </div>
                </div>
            </div>


            <div className='mainLogin'>

           
            <div className='mid'>
                <div className='heads'>Tasbeeh App</div>
                <div className='innerLogin'>
                    <div className='count'>{count}</div>

                    <div className='mainButton'>
                        <Mybutton type="submit" name="+" click={() => { setCount(count + 1) }} />
                        
                        <Mybutton type="submit" name="Reset" click={() => { setCount(0) }} />
                    </div>
                </div>


            </div>
            </div>

<div className='header'>
                

                <div className='left'>
                    <div className='leftChild'><div >
                        <h2>Contact Us</h2> 
                        <h4>0316-3522270</h4>
                        <h5>ruarua682@gmail.com</h5>
                        <h4>PIA Phase 2 Block 9 Karachi</h4>  
                        </div>
                        <div></div>
                     </div>
                </div>
                <div className='pickaaba'>
                    <img src={require("../assets/madiina.png")} alt="alternatetext" />
                </div>
            </div>





        </div>

    )

}
export default Login;