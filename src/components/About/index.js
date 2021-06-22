import React from 'react'
import image from '../../assets/avataaars (1).png'
import './style.css'
import { DiJqueryLogo } from 'react-icons/di'
import { DiHtml5 } from 'react-icons/di'
import { DiJavascript1 } from 'react-icons/di'
import { DiCss3 } from 'react-icons/di'
import { DiReact } from 'react-icons/di'
import { DiNodejs } from 'react-icons/di'
import { DiMysql } from 'react-icons/di'
import { DiMongodb } from 'react-icons/di'

const About = () => {
    return (
        <div>
            <section class="main-body">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <img src={image} id="image-about" alt="logo"></img>
                            <h2 class="snippet">"I've always found fascinanting how someone using a computer could create a whole new world inside a small console. "</h2>
                            <br></br>
                            <p class="about-me">My name is Guillermo Garcia, and I was born in Maracay, Venezuela. Currently, I am a software engineer in the making. I am that guy always smiling in the street, it doesn't matter circumstances.I consider myself a creative, friendly and outgoing person; making people laugh always makes my day. Also a hard worker; it does not matter the type of work. Although I am not a perfectionist, I believe there is always room to improve in a project or your life in general.
                            </p>
                            <br></br>
                            <p class="about-me">I am an avid sports fan. I pretty much find all sports entertaining, but soccer is the top sport for me. As a sports fan, I pretty much play every single sports video game available. My favorite video game is "EA Sports - FIFA", but it can be frustrating at times.
                            </p>
                            <br></br>
                            <p class="about-me">My interest in technology first came when my parents bought me a Playstation 2. I've always found fascinanting how someone using a computer could create a whole new world inside a small console. Since then, I've always wanted to learn how to create a "NEW WORLD" myself. So, if you want to take a look into my world, please check my portfolio section.</p>
                            <br></br>
                            <hr class="hr-about"></hr>
                            <h3 class="skills-title" id="dev-skills">Development Skills</h3>
                            <h5 class="skills-title" id="front-end">Front-End</h5>
                            <DiHtml5 size={50} class="skills" />
                            <DiCss3 size={50} class="skills" />
                            <DiJavascript1 size={50} class="skills" />
                            <DiJqueryLogo size={50} class="skills" />
                            <DiReact size={50} class="skills" />

                            <h5 class="skills-title">Back-End</h5>
                            <DiNodejs size={80} class="skills" />
                            <DiMysql size={50} class='skills' />
                            <DiMongodb size={50} class='skills' />
                            <p class="express-skills">Express JS</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About
