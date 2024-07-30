import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { FaCss3Alt } from "react-icons/fa";
import './App.css'
import { ImHtmlFive2 } from "react-icons/im";
import img from "./images/image.png"
import posimg from "./images/pos.png"
import blogimg from "./images/blog.png"
import ecommerse from "./images/ecommorse.png"
import { SiMongodb } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io";
function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <div className='w-full h-auto bg-black text-center !scroll-smooth' id="home">
        <div className='w-full h-[13vh]'>
          <div className=' w-full md:w-[60%] h-[5vh] bg-slate-100 md:ml-[20%]  top-10  rounded-2xl  sticky'>
            <ul className='flex md:justify-center justify-around items-center  md:gap-20 text-black '>
              <li className=' w-10 md:w-14 relative top-1 hover:font-black cursor-pointer hover:font-serif'>
                <a href="#home">Home</a>
              </li>
              <li className=' w-14 md:w-14 relative top-1 hover:font-black cursor-pointer hover:font-serif'>
                <a href="#Education">Education</a>
              </li>
              <li className=' w-14 md:w-14 relative top-1 hover:font-black cursor-pointer hover:font-serif'>
                <a href="#Experince"> Experince</a>
              </li>

              <li className='w-10 md:w-14 relative top-1 hover:font-black cursor-pointer hover:font-serif'>
                <a href="#Skills">Skills</a>
              </li>
              <li className='w-10 md:w-14 relative top-1 hover:font-black cursor-pointer hover:font-serif'>
                <a href="#Projects">Projects</a>
              </li>
              <li className=' md:w-14 w-10 relative top-1 hover:font-black cursor-pointer hover:font-serif'>
                <a href="#Contact">Contact </a>
              </li>
            </ul>
          </div>
        </div>
        <div className='w-full h-[80vh] text-center  mt-5 flex flex-col items-center'>
          <h1 className='text-white text-4xl font-semibold'>Hello! I'm Aarya Moktan</h1>
          <h1 className='text-white text-2xl font-semibold mt-3'>A Full-Stack Developer</h1>
          <div className='h-[35vh] w-full text-white mt-0  gap-3 items-center'>
            <button type="bownlode" className=' w-[30%] md:w-[10%] h-[4.5vh] rounded-3xl font-serif relative top-10 mr-10 bg-orange-600 p-1'><a href="file:///C:/Users/Lenovo/Desktop/myportfilio/my-vue-app/src/images/Aarya%20Resume%20(3).pdf" downlode="mycv">See Cv</a></button>
            <button className=' w-[30%] md:w-[10%] h-[4.5vh] rounded-3xl font-serif relative top-10 ml-10 bg-orange-600 p-1'>Hire-me</button>
          </div>
          <img src={img} className=' w-[50%] md:w-[19.99%] absolute top-[53%] md:top-[43.3%]' alt="myimage" />
          <div className=' w-[50%] md:w-[20%] h-[20vh] bg-orange-500 rounded-t-full'>
          </div>
        </div>
        <div className=' mt-[-6%] h-[70vh] flex flex-col text-center'>
          <h1 className='text-[50px] text-orange-500 font-bold font-serif'>About  Me</h1>
          <div className='w-full flex gap-[70px] md:gap-[100px] mt-7 items-center justify-center'>
            <div className='w-[40%] md:w-[10%] h-[20vh] bg-[#333333] rounded-xl'><h1 className='mt-4 font-bold font-serif text-5xl text-orange-500'>1+</h1>
              <p className='font-semibold text-xl text-white font-serif mt-2'>Years<br /> Experince</p></div>
            <div className='w-[40%] md:w-[10%] h-[20vh] bg-[#333333] rounded-xl'>
              <h1 className='mt-4 font-bold font-serif text-5xl text-orange-500 '>5+</h1>
              <p className='font-semibold text-xl text-white font-serif mt-2'>Projects<br /> Completed</p>
            </div>

          </div>
          <div className='w-[100%] md:w-[70%] h-[25vh] bg-[#333333] md:ml-[15%] mt-16 rounded-xl'></div>
        </div>
        <div className='w-full h-[70vh] text-center ' id="Education">
          <h1 className='text-orange-500 text-[50px] font-semibold font-serif mt-16'>Education</h1>
          <div className='w-full h-auto justify-center flex md:flex-row flex-col items-center gap-14 mt-10'>
            <div className=' w-[70%] md:w-[30%] h-[40vh] bg-[#333333] text-white rounded-3xl '>
              <div className='w-full  bg-[#333333] text-white flex rounded-2xl justify-around'>
                <div className='bg-black text-orange-500 text-center w-[30%] h-[4vh] rounded-3xl mt-10'><p className='mt-0.5 font-serif'>2017-2018</p></div>
                <div className='bg-white text-black text-center w-fit pl-2 pr-4 md:w-[30%] h-[4vh] rounded-3xl mt-10'><p className='mt-1 font-serif text-sm '>Higher Academy</p></div>
              </div>
              <div className='flex ml-10 gap-2 '>
                <div className='bg-white text-black text-center w-[30%] h-[4vh] rounded-3xl mt-10'><p className='mt-0.5 font-serif font-semibold'>Science</p></div>
                <div className='bg-white text-black text-center w-[10%]  h-[4vh] rounded-3xl mt-10'><p className='mt-1 font-serif text-sm font-semibold'>+2</p></div>
              </div>
              <div className='mt-10'>
                <h1 className='text-2xl font-serif font-semibold'>The Times International College</h1>
                <p className='mt-3 font-serif font-semibold'>Dillibazar, KTM, Nepal</p>
                <p></p>
              </div>
            </div>
            <div className='md:w-[30%] w-[70%] bg-[#c0bfbf]  text-black rounded-2xl '>
              <div className='w-full  bg-[#c0bfbf] text-white flex rounded-2xl justify-around'>
                <div className='bg-black text-orange-500 text-center w-[30%] h-[4vh] rounded-3xl mt-10'><p className='mt-0.5 font-serif'>2018-2022</p></div>
                <div className='bg-white text-black text-center w-[30%] h-[4vh] rounded-3xl mt-10'><p className='mt-1 font-serif text-sm font-semibold'>Graduation</p></div>
              </div>
              <div className='flex ml-10 gap-2 '>
                <div className='bg-white text-black text-center w-[30%] h-[4vh] rounded-3xl mt-10'><p className='mt-0.5 font-serif font-semibold'>B-Tech</p></div>
                <div className='bg-white text-black text-center w-[13%]  h-[4vh] rounded-3xl mt-10'><p className='mt-1 font-serif text-sm font-semibold'>CSE</p></div>

              </div>
              <div className='mt-10'>
                <h1 className='text-2xl font-serif font-semibold'>Panipath Institute of Engineering & Technology</h1>
                <p className='mt-3 font-serif font-semibold'>Samalkha,Panipath,Haryana-India</p>
                <p></p>
              </div>

            </div>
          </div>

        </div>
        <div className='w-full h-[60vh] text-center mt-5 relative' id="Skills">
          <h1 className='text-4xl text-orange-500 font-serif font-extrabold mt-[80%] md:mt-0 '>Skills</h1>
          <div className='flex justify-center gap-5 mt-10 items-center'>
            <div className='w-fit  pl-7 pr-7 h-[4vh] rounded-xl bg-slate-50 flex text-center justify-center'><p><ImHtmlFive2 style={{ fontSize: "20px", marginTop: "5px", color: "red" }} /></p > <p className='mt-1 font-semibold'>HTML</p></div>
            <div className='w-fit  pl-7 pr-7 h-[4vh] rounded-xl bg-slate-50 flex text-center justify-center'><p><FaCss3Alt style={{ fontSize: "20px", marginTop: "5px", color: "blue" }} /></p > <p className='mt-1 font-semibold'>CSS</p></div>
          </div>
          <div className='flex justify-center gap-5 mt-10 items-center'>
            <div className='w-fit  pl-2 pr-2 h-[4vh] rounded-xl bg-slate-50 flex text-center justify-center'><p><IoLogoJavascript style={{ fontSize: "20px", marginTop: "5px", color: "yellow" }} /></p > <p className='mt-1 font-semibold ml-1'>JAVA-SCRIPT</p></div>
            <div className='w-fit  pl-2 pr-2 h-[4vh] rounded-xl bg-slate-50 flex text-center justify-center'><p><SiTailwindcss style={{ fontSize: "20px", marginTop: "5px", color: "blue" }} /></p > <p className='mt-1 font-semibold ml-1'>Tailwind CSS</p></div>
            <div className='w-fit  pl-2 pr-2 h-[4vh] rounded-xl bg-slate-50 flex text-center justify-center'><p><SiTypescript style={{ fontSize: "20px", marginTop: "5px", color: "blue" }} /></p > <p className='mt-1 font-semibold ml-1'> TYPE-SCRIPT</p></div>

          </div>
          <div className='flex justify-center gap-5 mt-10 items-center'>
            <div className='w-fit  pl-2 pr-2 h-[4vh] rounded-xl bg-slate-50 flex text-center justify-center'><p><FaReact style={{ fontSize: "20px", marginTop: "5px", color: "blue" }} /></p > <p className='mt-1 font-semibold ml-1'>REACT-JS</p></div>
            <div className='w-fit  pl-2 pr-2 h-[4vh] rounded-xl bg-slate-50 flex text-center justify-center'><p><SiExpress style={{ fontSize: "20px", marginTop: "5px", color: "blue" }} /></p > <p className='mt-1 font-semibold ml-1'>EXPRESS-JS</p></div>
            <div className='w-fit  pl-2 pr-2 h-[4vh] rounded-xl bg-slate-50 flex text-center justify-center'><p><IoLogoNodejs style={{ fontSize: "20px", marginTop: "5px", color: "green" }} /></p > <p className='mt-1 font-semibold ml-1'> NODE-JS</p></div>
            <div className='w-fit  pl-2 pr-2   h-[4vh] rounded-xl bg-slate-50 flex text-center justify-center'><p><SiMongodb style={{ fontSize: "20px", marginTop: "5px", color: "green" }} /></p > <p className='mt-1 font-semibold ml-1'> MONGODB</p></div>
          </div>
          <div className='flex justify-center gap-5 mt-10 items-center'>
            <div className='w-[10%] h-[4vh] rounded-xl bg-slate-50 flex text-center justify-center'><p></p > <p className='mt-1 font-semibold ml-1 text-blue-700'>C</p></div>
            <div className='w-[10%] h-[4vh] rounded-xl bg-slate-50 flex text-center justify-center'><p></p > <p className='mt-1 font-semibold ml-1 text-green-700'>C++</p></div>
          </div>
        </div>
        <h1 id="Experince" className='text-3xl font-bold font-serif text-orange-500 '>My Work Experince</h1>
        <div className='w-[80%] h-[90vh] ml-[10%] bg-[#000000]  rounded-3xl  text-white text-start mt-10'>
          <div className='w-[100%] '>
            <h1 className='text-3xl font-serif font-semibold text-orange-500 mt-10'>Pos:</h1>
            <p className='ml-14 mt-1 font-serif font-semibold'>
              Developed a Point of Sale (POS) system with the MERN (MongoDB, Express,
              React, and Node) stack to manage sales, inventory, and customer transactions
              effectively. created and put into place a user-friendly interface that allows
              cashiers to process orders, monitor inventory levels, and instantly produce sales
              reports.<br />
               Developed a responsive frontend interface using React.js, incorporating Redux for state management and Material-UI for design
              components, ensuring a smooth and intuitive user experience.. <br />
               Engineered RESTful APIs using Express.js and MongoDB, enabling CRUD operations for
              managing.products,user accounts, and orders, ensuring data integrity and security.
              <br />
               Integrated with Stripe for secure pay </p>
          </div>
          <div className='w-[100%] '>
            <h1 className='text-3xl font-serif font-semibold text-orange-500 mt-10'>E-commerce Platform:</h1>
            <p className='ml-14 mt-1 font-serif font-semibold'>
              Create an online store where people may purchase and sell goods. Add functions like order processing, cart management,
              user authentication, order listings, and PayPal or Stripe payment connection.  </p>
          </div>
          <div className='w-[100%] '>
            <h1 className='text-3xl font-serif font-semibold text-orange-500 mt-10'>Health and Fitness Tracker:</h1>
            <p className='ml-14 mt-1 font-serif font-semibold'>
              Create a web application to keep track of your fitness and health objectives. Include functions like goal-setting,
              activity monitoring, progress charts, user profiles, and reminders.  </p>
          </div>
          <div className='w-[100%] '>
            <h1 className='text-3xl font-serif font-semibold text-orange-500 mt-10'>Social Media Platform:</h1>
            <p className='ml-14 mt-1 font-serif font-semibold'>
              Establish a website for social networking where users may make profiles, get in touch with friends, exchange content,
              leave comments, and mark content as liked or disliked.  </p>
          </div>
          <div className='w-[100%] '>
            <h1 className='text-3xl font-serif font-semibold text-orange-500 mt-10'>Blogging Platform: </h1>
            <p className='ml-14 mt-1 font-serif font-semibold'>
              Create a platform for users to create and publish blog posts. Include features such as user authentication, rich text editing,
              commenting, categorization of posts, and search functionality.   </p>
          </div>
          <div>
          </div>

        </div>
        <div className='w-full flex   flex-col justify-center items-center gap-10 h-auto text-center mt-[180%] md:mt-[200px]' id="Projects">
          <h1 className='text-[#FB6514] text-[50px] font-semibold font-serif'>Some Projects</h1>
          <div className='w-[70%] md:w-[50%] h-auto md:h-[30vh] bg-[#F42626]  flex md:flex-row flex-col rounded-xl'>
            <div className=' w-[100%] md:w-[40%] h-[100%]'>
              <img className='w-[100%] h-[100%] rounded-xl' src={posimg} />
            </div>
            <div className='w-[100%] md:w-[60%] h-[100%]'>
              <h1 className='text-white text-3xl font-serif font-semibold'>Pos</h1>
              <p className='text-white text-md font-serif font-semibold'>Technology i have used</p>
              <div className='flex   w-[100%] flex-wrap gap-2 justify-center mt-3'>
                <div className='w-fit  pl-4 pr-4 h-[4vh] rounded-xl bg-slate-50 flex text-center justify-center'><p><ImHtmlFive2 style={{ fontSize: "30px", marginTop: "1px", color: "red" }} /></p > <p className='mt-0.5  font-semibold'>HTML</p></div>
                <div className='w-fit  pl-4 pr-4  h-[4vh] rounded-xl bg-slate-50 flex text-center justify-center'><p><FaCss3Alt style={{ fontSize: "30px", marginTop: "1px", color: "blue" }} /></p > <p className='mt-0.5 font-semibold'>CSS</p></div>
                <div className='w-fit  pl-4 pr-4  h-[4vh] rounded-xl bg-slate-50 flex text-center justify-center'><p><IoLogoJavascript style={{ fontSize: "20px", marginTop: "6px", color: "yellow" }} /></p > <p className='mt-0.5 '>JAVA-SCRIPT</p></div>

                <div className='w-fit  pl-4 pr-4  h-[4vh] rounded-xl bg-slate-50 flex text-center justify-center'><p><FaReact style={{ fontSize: "30px", marginTop: "1px", color: "blue" }} /></p > <p className='mt-0.5'>REACT-JS</p></div>
                <div className='w-fit  pl-4 pr-4  h-[4vh] rounded-xl bg-slate-50 flex text-center justify-center'><p><SiExpress style={{ fontSize: "20px", marginTop: "6px", color: "blue" }} /></p > <p className='mt-0.5'>EXPRESS-JS</p></div>
                <div className='w-fit  pl-4 pr-4  h-[4vh] rounded-xl bg-slate-50 flex text-center justify-center'><p><IoLogoNodejs style={{ fontSize: "25px", marginTop: "1px", color: "green" }} /></p > <p className='mt-0.5 '> NODE-JS</p></div>
                <div className='w-fit  pl-4 pr-4  h-[4vh] rounded-xl bg-slate-50 flex text-center justify-center'><p><SiMongodb style={{ fontSize: "30px", marginTop: "1px", color: "green" }} /></p > <p className='mt-0.5 '> MONGODB</p></div>
              </div>
            </div>
          </div>

          <div className='w-[70%] md:w-[50%] h-auto ms:h-[30vh] bg-[#F42626]  flex md:flex-row flex-col rounded-xl'>
            <div className=' w-[100%] md:w-[40%] h-[100%]'>
              <img className=' h-[100%] rounded-xl' src={blogimg} />
            </div>
            <div className='w-[100%] md:w-[60%] h-auto md:h-[100%]'>
              <h1 className='text-white text-3xl font-serif font-semibold'>Blog</h1>
              <p className='text-white text-md font-serif font-semibold'>Technology i have used</p>
              <div className='flex w-[100%] flex-wrap gap-2 justify-center mt-3'>
                <div className='w-fit  pl-4 pr-4  h-[4vh] rounded-xl bg-slate-50 flex text-center justify-center'><p><ImHtmlFive2 style={{ fontSize: "20px", marginTop: "5px", color: "red" }} /></p > <p className='mt-0.5 font-semibold'>HTML</p></div>
                <div className='w-fit  pl-4 pr-4  h-[4vh] rounded-xl bg-slate-50 flex text-center justify-center'><p><FaCss3Alt style={{ fontSize: "20px", marginTop: "5px", color: "blue" }} /></p > <p className='mt-0.5 font-semibold'>CSS</p></div>
                <div className='w-fit  pl-4 pr-4  h-[4vh] rounded-xl bg-slate-50 flex text-center justify-center'><p><IoLogoJavascript style={{ fontSize: "20px", marginTop: "5px", color: "yellow" }} /></p > <p className='mt-0.5 '>JAVA-SCRIPT</p></div>
                <div className='w-fit  pl-4 pr-4  h-[4vh] rounded-xl bg-slate-50 flex text-center justify-center'><p><SiTailwindcss style={{ fontSize: "20px", marginTop: "5px", color: "blue" }} /></p > <p className='mt-0.5'>Tailwind CSS</p></div>
                <div className='w-fit  pl-4 pr-4  h-[4vh] rounded-xl bg-slate-50 flex text-center justify-center'><p><FaReact style={{ fontSize: "20px", marginTop: "5px", color: "blue" }} /></p > <p className='mt-0.5'>REACT-JS</p></div>
                <div className='w-fit  pl-4 pr-4  h-[4vh] rounded-xl bg-slate-50 flex text-center justify-center'><p><SiExpress style={{ fontSize: "20px", marginTop: "5px", color: "blue" }} /></p > <p className='mt-0.5'>EXPRESS-JS</p></div>
                <div className='w-fit  pl-4 pr-4  h-[4vh] rounded-xl bg-slate-50 flex text-center justify-center'><p><IoLogoNodejs style={{ fontSize: "20px", marginTop: "5px", color: "green" }} /></p > <p className='mt-0.5 '> NODE-JS</p></div>
                <div className='w-fit  pl-4 pr-4  h-[4vh] rounded-xl bg-slate-50 flex text-center justify-center'><p><SiMongodb style={{ fontSize: "20px", marginTop: "5px", color: "green" }} /></p > <p className='mt-0.5 '> MONGODB</p></div>
              </div>
            </div>
          </div>

          <div className='w-[70%] md:w-[50%] h-auto md:h-[30vh] bg-[#F42626]  flex rounded-xl md:flex-row flex-col mb-10'>
            <div className=' w-[100%] md:w-[40%] h-[100%]'>
              <img className='w-[100%] h-[100%] rounded-xl' src={ecommerse} />
            </div>
            <div className='w-[100%] md:w-[60%] h-[100%]'>
              <h1 className='text-white text-3xl font-serif font-semibold'>E-commerce</h1>
              <p className='text-white text-md font-serif font-semibold'>Technology i have used</p>
              <div className='flex w-[100%] flex-wrap gap-2 justify-center mt-3'>
                <div className='w-fit  pl-4 pr-4  h-[4vh] rounded-xl bg-slate-50 flex text-center justify-center'><p><ImHtmlFive2 style={{ fontSize: "20px", marginTop: "5px", color: "red" }} /></p > <p className='mt-0.5 font-semibold'>HTML</p></div>
                <div className='w-fit  pl-4 pr-4  h-[4vh] rounded-xl bg-slate-50 flex text-center justify-center'><p><FaCss3Alt style={{ fontSize: "20px", marginTop: "5px", color: "blue" }} /></p > <p className='mt-0.5 font-semibold'>CSS</p></div>
                <div className='w-fit  pl-4 pr-4  h-[4vh] rounded-xl bg-slate-50 flex text-center justify-center'><p><IoLogoJavascript style={{ fontSize: "20px", marginTop: "5px", color: "yellow" }} /></p > <p className='mt-0.5 '>JAVA-SCRIPT</p></div>
                <div className='w-fit  pl-4 pr-4  h-[4vh] rounded-xl bg-slate-50 flex text-center justify-center'><p><SiTailwindcss style={{ fontSize: "20px", marginTop: "5px", color: "blue" }} /></p > <p className='mt-0.5 '>Tailwind CSS</p></div>
                <div className='w-fit  pl-4 pr-4  h-[4vh] rounded-xl bg-slate-50 flex text-center justify-center'><p><FaReact style={{ fontSize: "20px", marginTop: "5px", color: "blue" }} /></p > <p className='mt-0.5'>REACT-JS</p></div>
                <div className='w-fit  pl-4 pr-4  h-[4vh] rounded-xl bg-slate-50 flex text-center justify-center'><p><SiExpress style={{ fontSize: "20px", marginTop: "5px", color: "blue" }} /></p > <p className='mt-0.5'>EXPRESS-JS</p></div>
                <div className='w-fit  pl-4 pr-4  h-[4vh] rounded-xl bg-slate-50 flex text-center justify-center'><p><IoLogoNodejs style={{ fontSize: "20px", marginTop: "5px", color: "green" }} /></p > <p className='mt-0.5 '> NODE-JS</p></div>
                <div className='w-fit  pl-4 pr-4  h-[4vh] rounded-xl bg-slate-50 flex text-center justify-center'><p><SiMongodb style={{ fontSize: "20px", marginTop: "5px", color: "green" }} /></p > <p className='mt-0.5 '> MONGODB</p></div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-[100vh] text-center" id="Contact">
          <h1 className='text-3xl font-serif font-semibold text-orange-500 mt-28'>Contact-Me</h1>
          <div className=' w-[90%] ml-[5%] md:w-[50%] md:ml-[25%] mt-10 h-[60%] md:h-[80vh] rounded-2xl bg-[#FFFFFF]   '>
            <div className=' flex gap-10 justify-center '>
              <input  className="w-[40%] h-[4.5vh] bg-[#ececec]  mt-20 rounded-2xl border-collapse " placeholder='Full Name' type="text"/>
              <input className='w-[40%] bg-[#ececec] mt-20 rounded-2xl' placeholder='E-mail' type="text"/>
            </div>
            <div className=' flex gap-10 justify-center mt-1'>
              <input  className="w-[40%] h-[4.5vh] bg-[#ececec]  mt-3 rounded-2xl border-collapse " placeholder='Mobile No' type="text"/>
              <input className='w-[40%] bg-[#ececec] mt-3 rounded-2xl' placeholder='Subject' type="text"/>
            </div>
           
            <div className=''>
              <input type="text" className='w-[85%] rounded-2xl mt-10 h-[20vh] md:h-[30vh] bg-[#ececec] text-start' placeholder='Message'/>

            </div>
            <button className='w-[30%] md:w-[10%] md:h-[3.5vh] bg-orange-500 mt-10 rounded-2xl text-white'>Send</button>
          </div>
          <div className=' w-[100%] md:w-[70%] rounded-2xl md:ml-[15%] mt-9 h-[4vh] text-center bg-orange-500'>
<p className='text-white text-md md:text-xl font-serif font-semibold'>Design By: aaryanmoktan2000@gmail.com</p>
</div>
        </div>
      

      </div>

    </>
  )
}

export default App
