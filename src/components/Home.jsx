import React from 'react'
import vg from "../assets/2.webp"
import { AiFillGoogleCircle, AiFillAmazonCircle, AiFillYoutube, AiFillInstagram } from "react-icons/ai"

const Home = () => {
    return (
        <>
            <div className='home' id='home'>
                <main>
                    <h1>react project 1</h1>
                    <p>solutions for all projects</p>
                </main>
            </div>
            <div className='home2'>
                <img src={vg} alt="graphics" />
                <div>
                    <p>
                        we are your one and only solutins for the web issues you face
                        <br />we are the leading tech company that aims for the seamless transitoin in the chaotic world
                    </p>
                </div>
            </div>
            <div className="home3" id='about'>
                <div>
                    <h1>Who we are</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum laboriosam necessitatibus impedit ratione qui non nemo, porro ipsa aliquid suscipit perspiciatis libero. Dolorem temporibus nulla, similique deleniti et iure repudiandae delectus accusantium minima. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, consequatur!</p>
                </div>
            </div>
            <div className="home4" id='brands'>
                <div>
                    <h1>Brands</h1>
                    <article>
                        <div style={{
                            animationDelay: "0.3s"
                        }}>
                            <AiFillGoogleCircle />
                            <p>Google</p>
                        </div>
                        <div style={{
                            animationDelay: "0.5s"
                        }}>
                            <AiFillAmazonCircle />
                            <p>Amazon</p>
                        </div>
                        <div style={{
                            animationDelay: "0.7s"
                        }}>
                            <AiFillInstagram />
                            <p>Instagram</p>
                        </div>
                        <div style={{
                            animationDelay: "1s"
                        }}>
                            <AiFillYoutube />
                            <p>Youtube</p>
                        </div>


                    </article>
                </div>

            </div>
        </>
    )
}

export default Home
