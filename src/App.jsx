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
      <div className='w-full h-auto bg-black text-center'>
        <div className='w-full h-[13vh]'>
          <div className='w-[60%] h-[5vh] bg-slate-100 ml-[20%] relative top-10  rounded-2xl '>
            <ul className='flex justify-center items-center gap-28 text-black'>
              <li className=' w-14 relative top-2 hover:font-black cursor-pointer hover:font-serif'>
                Home
              </li>
              <li className=' w-14 relative top-2 hover:font-black cursor-pointer hover:font-serif'>
                Experince
              </li>
              <li className=' w-14 relative top-2 hover:font-black cursor-pointer hover:font-serif'>
                Education
              </li>
              <li className='w-14 relative top-2 hover:font-black cursor-pointer hover:font-serif'>
                Skills
              </li>
              <li className='w-14  relative top-2 hover:font-black cursor-pointer hover:font-serif'>
                Projects
              </li>
            </ul>

          </div>
        </div>
        <div className='w-full h-[80vh] text-center  mt-5 flex flex-col items-center'>
          <h1 className='text-white text-4xl font-semibold'>Hello! I'm Aarya Moktan</h1>
          <h1 className='text-white text-2xl font-semibold mt-3'>A Full-Stack Developer</h1>
          <div className='h-[35vh] w-full text-white mt-0  gap-3 items-center'>
            <button type="bownlode" className='w-[10%] h-[4.5vh] rounded-3xl font-serif relative top-10 mr-10 bg-orange-600 p-1'><a href="file:///C:/Users/Lenovo/Desktop/myportfilio/my-vue-app/src/images/Aarya%20Resume%20(3).pdf" downlode="mycv">See Cv</a></button>
            <button className='w-[10%] h-[4.5vh] rounded-3xl font-serif relative top-10 ml-10 bg-orange-600 p-1'>Hire-me</button>
          </div>

          <img src={img} className='w-[19.99%] absolute top-[43.3%]' alt="myimage" />
          <div className='w-[20%] h-[20vh] bg-orange-500 rounded-t-full'>


          </div>



        </div>
        <div className=' mt-[-6%] h-[70vh] flex flex-col text-center'>
          <h1 className='text-[50px] text-orange-500 font-bold font-serif'>About  Me</h1>
          <div className='w-full flex gap-[100px] mt-7 items-center justify-center'>
            <div className='w-[10%] h-[20vh] bg-[#333333] rounded-xl'><h1 className='mt-5 font-bold font-serif text-5xl text-orange-500'>1+</h1>
              <p className='font-semibold text-xl text-white font-serif mt-3'>Years<br /> Experince</p></div>
            <div className='w-[10%] h-[20vh] bg-[#333333] rounded-xl'>
              <h1 className='mt-5 font-bold font-serif text-5xl text-orange-500 '>5+</h1>
              <p className='font-semibold text-xl text-white font-serif mt-3'>Projects<br /> Completed</p>
            </div>

          </div>
          <div className='w-[90%] h-[25vh] bg-[#333333] ml-[5%] mt-16 rounded-xl'></div>
        </div>
        <div className='w-full h-[70vh] text-center '>
          <h1 className='text-orange-500 text-[50px] font-semibold font-serif mt-16'>Education</h1>
          <div className='w-full h-auto justify-center flex gap-14 mt-10'>
            <div className='w-[30%] h-[40vh] bg-[#333333] text-white rounded-3xl '>
              <div className='w-full  bg-[#333333] text-white flex rounded-2xl justify-around'>
                <div className='bg-black text-orange-500 text-center w-[30%] h-[4vh] rounded-3xl mt-10'><p className='mt-0.5 font-serif'>2017-2018</p></div>
                <div className='bg-white text-black text-center w-[30%] h-[4vh] rounded-3xl mt-10'><p className='mt-1.5 font-serif text-sm font-semibold'>Higher Academy</p></div>
              </div>
              <div className='flex ml-10 gap-2 '>
                <div className='bg-white text-black text-center w-[30%] h-[4vh] rounded-3xl mt-10'><p className='mt-0.5 font-serif font-semibold'>Science</p></div>
                <div className='bg-white text-black text-center w-[10%]  h-[4vh] rounded-3xl mt-10'><p className='mt-1.5 font-serif text-sm font-semibold'>+2</p></div>
              </div>
              <div className='mt-10'>
                <h1 className='text-2xl font-serif font-semibold'>The Times International College</h1>
                <p className='mt-3 font-serif font-semibold'>Dillibazar, KTM, Nepal</p>
                <p></p>
              </div>
            </div>
            <div className='w-[30%]  bg-[#c0bfbf]  text-black rounded-2xl '>
              <div className='w-full  bg-[#c0bfbf] text-white flex rounded-2xl justify-around'>
                <div className='bg-black text-orange-500 text-center w-[30%] h-[4vh] rounded-3xl mt-10'><p className='mt-0.5 font-serif'>2018-2022</p></div>
                <div className='bg-white text-black text-center w-[30%] h-[4vh] rounded-3xl mt-10'><p className='mt-1.5 font-serif text-sm font-semibold'>Graduation</p></div>
              </div>
              <div className='flex ml-10 gap-2 '>
                <div className='bg-white text-black text-center w-[30%] h-[4vh] rounded-3xl mt-10'><p className='mt-0.5 font-serif font-semibold'>B-Tech</p></div>
                <div className='bg-white text-black text-center w-[13%]  h-[4vh] rounded-3xl mt-10'><p className='mt-1.5 font-serif text-sm font-semibold'>CSE</p></div>

              </div>
              <div className='mt-10'>
                <h1 className='text-2xl font-serif font-semibold'>Panipath Institute of Engineering & Technology</h1>
                <p className='mt-3 font-serif font-semibold'>Samalkha,Panipath,Haryana-India</p>
                <p></p>
              </div>

            </div>
          </div>

        </div>
        <div className='w-full h-[60vh] text-center mt-5'>
          <h1 className='text-4xl text-orange-500 font-serif font-extrabold '>Skills</h1>
          <div className='flex justify-center gap-5 mt-10 items-center'>
            <div className='w-[10%] h-[4vh] rounded-xl bg-slate-50 flex text-center justify-center'><p><ImHtmlFive2 style={{ fontSize: "30px", marginTop: "1px", color: "red" }} /></p > <p className='mt-1 font-semibold'>HTML</p></div>
            <div className='w-[10%] h-[4vh] rounded-xl bg-slate-50 flex text-center justify-center'><p><FaCss3Alt style={{ fontSize: "30px", marginTop: "1px", color: "blue" }} /></p > <p className='mt-1 font-semibold'>CSS</p></div>
          </div>
          <div className='flex justify-center gap-5 mt-10 items-center'>
            <div className='w-[10%] h-[4vh] rounded-xl bg-slate-50 flex text-center justify-center'><p><IoLogoJavascript style={{ fontSize: "30px", marginTop: "1px", color: "yellow" }} /></p > <p className='mt-1 font-semibold ml-1'>JAVA-SCRIPT</p></div>
            <div className='w-[10%] h-[4vh] rounded-xl bg-slate-50 flex text-center justify-center'><p><SiTailwindcss style={{ fontSize: "30px", marginTop: "1px", color: "blue" }} /></p > <p className='mt-1 font-semibold ml-1'>Tailwind CSS</p></div>
            <div className='w-[10%] h-[4vh] rounded-xl bg-slate-50 flex text-center justify-center'><p><SiTypescript style={{ fontSize: "30px", marginTop: "1px", color: "blue" }} /></p > <p className='mt-1 font-semibold ml-1'> TYPE-SCRIPT</p></div>

          </div>
          <div className='flex justify-center gap-5 mt-10 items-center'>
            <div className='w-[10%] h-[4vh] rounded-xl bg-slate-50 flex text-center justify-center'><p><FaReact style={{ fontSize: "30px", marginTop: "1px", color: "blue" }} /></p > <p className='mt-1 font-semibold ml-1'>REACT-JS</p></div>
            <div className='w-[10%] h-[4vh] rounded-xl bg-slate-50 flex text-center justify-center'><p><SiExpress style={{ fontSize: "30px", marginTop: "1px", color: "blue" }} /></p > <p className='mt-1 font-semibold ml-1'>EXPRESS-JS</p></div>
            <div className='w-[10%] h-[4vh] rounded-xl bg-slate-50 flex text-center justify-center'><p><IoLogoNodejs style={{ fontSize: "30px", marginTop: "1px", color: "green" }} /></p > <p className='mt-1 font-semibold ml-1'> NODE-JS</p></div>
            <div className='w-[10%] h-[4vh] rounded-xl bg-slate-50 flex text-center justify-center'><p><SiMongodb style={{ fontSize: "30px", marginTop: "1px", color: "green" }} /></p > <p className='mt-1 font-semibold ml-1'> MONGODB</p></div>
          </div>
          <div className='flex justify-center gap-5 mt-10 items-center'>
            <div className='w-[10%] h-[4vh] rounded-xl bg-slate-50 flex text-center justify-center'><p></p > <p className='mt-1 font-semibold ml-1 text-blue-700'>C</p></div>
            <div className='w-[10%] h-[4vh] rounded-xl bg-slate-50 flex text-center justify-center'><p></p > <p className='mt-1 font-semibold ml-1 text-green-700'>C++</p></div>
          </div>
        </div>
        <h1 className='text-3xl font-bold font-serif text-orange-500 '>My Work Experince</h1>
        <div className='w-[80%] h-[90vh] ml-[10%] bg-[#000000]  rounded-3xl  text-white text-start mt-10'>
          <div className='w-[100%] '>
            <h1 className='text-3xl font-serif font-semibold text-orange-300 mt-10'>Pos:</h1>
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
            <h1 className='text-3xl font-serif font-semibold text-orange-300 mt-10'>E-commerce Platform:</h1>
            <p className='ml-14 mt-1 font-serif font-semibold'>
            Create an online store where people may purchase and sell goods. Add functions like order processing, cart management, 
            user authentication, order listings, and PayPal or Stripe payment connection.  </p>
          </div>
          <div className='w-[100%] '>
            <h1 className='text-3xl font-serif font-semibold text-orange-300 mt-10'>Health and Fitness Tracker:</h1>
            <p className='ml-14 mt-1 font-serif font-semibold'>
            Create a web application to keep track of your fitness and health objectives. Include functions like goal-setting, 
            activity monitoring, progress charts, user profiles, and reminders.  </p>
          </div>
          <div className='w-[100%] '>
            <h1 className='text-3xl font-serif font-semibold text-orange-300 mt-10'>Social Media Platform:</h1>
            <p className='ml-14 mt-1 font-serif font-semibold'>
            Establish a website for social networking where users may make profiles, get in touch with friends, exchange content, 
            leave comments, and mark content as liked or disliked.  </p>
          </div>
          <div className='w-[100%] '>
            <h1 className='text-3xl font-serif font-semibold text-orange-300 mt-10'>Blogging Platform: </h1>
            <p className='ml-14 mt-1 font-serif font-semibold'>
            Create a platform for users to create and publish blog posts. Include features such as user authentication, rich text editing, 
commenting, categorization of posts, and search functionality.   </p>
          </div>
          <div>
          </div>

        </div>
        <div className='w-full flex flex-col justify-center items-center gap-10 h-auto text-center mt-[200px]'>
          <h1 className='text-[#FB6514] text-[50px] font-semibold font-serif'>Some Projects</h1>
          <div className='w-[50%] h-[30vh] bg-[#F42626]  flex rounded-xl'>
            <div className='w-[40%] h-[100%]'>
              <img className='w-[100%] h-[100%] rounded-xl' src={posimg}/>
            </div>
            <div className=' w-[60%] h-[100%]'>
              <h1 className='text-white text-3xl font-serif font-semibold'>Pos</h1>
              <p className='text-white text-md font-serif font-semibold'>Technology i have used</p>
              <div className='flex w-[100%] flex-wrap gap-2 justify-center mt-3'>
              <div className='w-[25%] h-[4vh] rounded-xl bg-slate-50 flex text-center justify-center'><p><ImHtmlFive2 style={{ fontSize: "30px", marginTop: "1px", color: "red" }} /></p > <p className='mt-1 font-semibold'>HTML</p></div>
              <div className='w-[25%] h-[4vh] rounded-xl bg-slate-50 flex text-center justify-center'><p><FaCss3Alt style={{ fontSize: "30px", marginTop: "1px", color: "blue" }} /></p > <p className='mt-1 font-semibold'>CSS</p></div>
              <div className='w-[25%] h-[4vh] rounded-xl bg-slate-50 flex text-center justify-center'><p><IoLogoJavascript style={{ fontSize: "20px", marginTop: "6px", color: "yellow" }} /></p > <p className='mt-1 '>JAVA-SCRIPT</p></div>

              <div className='w-[25%] h-[4vh] rounded-xl bg-slate-50 flex text-center justify-center'><p><FaReact style={{ fontSize: "30px", marginTop: "1px", color: "blue" }} /></p > <p className='mt-1'>REACT-JS</p></div>
            <div className='w-[25%] h-[4vh] rounded-xl bg-slate-50 flex text-center justify-center'><p><SiExpress style={{ fontSize: "20px", marginTop: "6px", color: "blue" }} /></p > <p className='mt-1'>EXPRESS-JS</p></div>
            <div className='w-[25%] h-[4vh] rounded-xl bg-slate-50 flex text-center justify-center'><p><IoLogoNodejs style={{ fontSize: "25px", marginTop: "1px", color: "green" }} /></p > <p className='mt-1 '> NODE-JS</p></div>
            <div className='w-[25%] h-[4vh] rounded-xl bg-slate-50 flex text-center justify-center'><p><SiMongodb style={{ fontSize: "30px", marginTop: "1px", color: "green" }} /></p > <p className='mt-1 '> MONGODB</p></div>
              </div>
            </div>
          </div>
          
          <div className='w-[50%] h-[30vh] bg-[#F42626]  flex rounded-xl'>
            <div className='w-[40%] h-[100%]'>
              <img className='w-[100%] h-[100%] rounded-xl' src={blogimg}/>
            </div>
            <div className=' w-[60%] h-[100%]'>
              <h1 className='text-white text-3xl font-serif font-semibold'>Blog</h1>
              <p className='text-white text-md font-serif font-semibold'>Technology i have used</p>
              <div className='flex w-[100%] flex-wrap gap-2 justify-center mt-3'>
              <div className='w-[25%] h-[4vh] rounded-xl bg-slate-50 flex text-center justify-center'><p><ImHtmlFive2 style={{ fontSize: "30px", marginTop: "1px", color: "red" }} /></p > <p className='mt-1 font-semibold'>HTML</p></div>
              <div className='w-[25%] h-[4vh] rounded-xl bg-slate-50 flex text-center justify-center'><p><FaCss3Alt style={{ fontSize: "30px", marginTop: "1px", color: "blue" }} /></p > <p className='mt-1 font-semibold'>CSS</p></div>
              <div className='w-[25%] h-[4vh] rounded-xl bg-slate-50 flex text-center justify-center'><p><IoLogoJavascript style={{ fontSize: "20px", marginTop: "6px", color: "yellow" }} /></p > <p className='mt-1 '>JAVA-SCRIPT</p></div>
              <div className='w-[25%] h-[4vh] rounded-xl bg-slate-50 flex text-center justify-center'><p><SiTailwindcss style={{ fontSize: "20px", marginTop: "6px", color: "blue" }} /></p > <p className='mt-1 '>Tailwind CSS</p></div>
              <div className='w-[25%] h-[4vh] rounded-xl bg-slate-50 flex text-center justify-center'><p><FaReact style={{ fontSize: "30px", marginTop: "1px", color: "blue" }} /></p > <p className='mt-1'>REACT-JS</p></div>
            <div className='w-[25%] h-[4vh] rounded-xl bg-slate-50 flex text-center justify-center'><p><SiExpress style={{ fontSize: "20px", marginTop: "6px", color: "blue" }} /></p > <p className='mt-1'>EXPRESS-JS</p></div>
            <div className='w-[25%] h-[4vh] rounded-xl bg-slate-50 flex text-center justify-center'><p><IoLogoNodejs style={{ fontSize: "25px", marginTop: "1px", color: "green" }} /></p > <p className='mt-1 '> NODE-JS</p></div>
            <div className='w-[25%] h-[4vh] rounded-xl bg-slate-50 flex text-center justify-center'><p><SiMongodb style={{ fontSize: "30px", marginTop: "1px", color: "green" }} /></p > <p className='mt-1 '> MONGODB</p></div>
              </div>
            </div>
          </div>

          <div className='w-[50%] h-[30vh] bg-[#F42626]  flex rounded-xl mb-10'>
            <div className='w-[40%] h-[100%]'>
              <img className='w-[100%] h-[100%] rounded-xl' src={ecommerse}/>
            </div>
            <div className=' w-[60%] h-[100%]'>
              <h1 className='text-white text-3xl font-serif font-semibold'>E-commerce</h1>
              <p className='text-white text-md font-serif font-semibold'>Technology i have used</p>
              <div className='flex w-[100%] flex-wrap gap-2 justify-center mt-3'> 
              <div className='w-[25%] h-[4vh] rounded-xl bg-slate-50 flex text-center justify-center'><p><ImHtmlFive2 style={{ fontSize: "30px", marginTop: "1px", color: "red" }} /></p > <p className='mt-1 font-semibold'>HTML</p></div>
              <div className='w-[25%] h-[4vh] rounded-xl bg-slate-50 flex text-center justify-center'><p><FaCss3Alt style={{ fontSize: "30px", marginTop: "1px", color: "blue" }} /></p > <p className='mt-1 font-semibold'>CSS</p></div>
              <div className='w-[25%] h-[4vh] rounded-xl bg-slate-50 flex text-center justify-center'><p><IoLogoJavascript style={{ fontSize: "20px", marginTop: "6px", color: "yellow" }} /></p > <p className='mt-1 '>JAVA-SCRIPT</p></div>
              <div className='w-[25%] h-[4vh] rounded-xl bg-slate-50 flex text-center justify-center'><p><SiTailwindcss style={{ fontSize: "20px", marginTop: "6px", color: "blue" }} /></p > <p className='mt-1 '>Tailwind CSS</p></div>
              <div className='w-[25%] h-[4vh] rounded-xl bg-slate-50 flex text-center justify-center'><p><FaReact style={{ fontSize: "30px", marginTop: "1px", color: "blue" }} /></p > <p className='mt-1'>REACT-JS</p></div>
            <div className='w-[25%] h-[4vh] rounded-xl bg-slate-50 flex text-center justify-center'><p><SiExpress style={{ fontSize: "20px", marginTop: "6px", color: "blue" }} /></p > <p className='mt-1'>EXPRESS-JS</p></div>
            <div className='w-[25%] h-[4vh] rounded-xl bg-slate-50 flex text-center justify-center'><p><IoLogoNodejs style={{ fontSize: "25px", marginTop: "1px", color: "green" }} /></p > <p className='mt-1 '> NODE-JS</p></div>
            <div className='w-[25%] h-[4vh] rounded-xl bg-slate-50 flex text-center justify-center'><p><SiMongodb style={{ fontSize: "30px", marginTop: "1px", color: "green" }} /></p > <p className='mt-1 '> MONGODB</p></div>
              </div>
            </div>
          </div>
         

        </div>
        
      </div>

    </>
  )
}

export default App
