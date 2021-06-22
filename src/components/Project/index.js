import React from 'react'
import image from "../../assets/weathermock.png"
import image2 from "../../assets/nationalpark.png"
import image3 from "../../assets/employeelist.png"
import './style.css'
import { DiJqueryLogo } from 'react-icons/di'
import { DiHtml5 } from 'react-icons/di'
import { DiJavascript1 } from 'react-icons/di'
import { DiCss3 } from 'react-icons/di'
import { BsGeoAlt } from 'react-icons/bs'
import { DiReact } from 'react-icons/di'


const Project = () => {
    return (

        <div class="project-container">
            <div class="project-div">
                <img src={image} alt='Project Sample' class="project-img-left"></img>
                <h2 class="title-right">Weather App</h2>
                <p class="description-right">
                    A web application that allow user to search the weather of different cities around the world. The app saves the user's past searches in buttons for easy access. The weather information includes: 5 day forecast, humidity, wind speed, temperature and UV index.
                </p>
                <h6 class="technologies-used-right">Technologies Used:</h6>
                <DiJqueryLogo size={50} class="logo-right" />
                <DiHtml5 size={50} class="logo-right" />
                <DiJavascript1 size={50} class="logo-right" />
                <DiCss3 size={50} class="logo-right" />

                <div class="a-div-right">
                    <a target="_blank" rel="noreferrer" href="https://github.com/guie01/Weather-Web-App" class='a-right'>Github</a>
                    <a target="_blank" rel="noreferrer" href="https://guie01.github.io/Weather-Web-App/" class='a-right'>Deployed App</a>
                </div>
                <hr class="hr-line"></hr>

            </div>

            <div class="project-container">
                <div>
                    <img src={image2} alt="Project Sample" class="project-img-right"></img>
                    <h2 class="title-left">National Parks Adventures</h2>
                    <p class="description-left">
                        A web application that allow user to search for National Parks by state. The app saves the user's previous searches in buttons for easy access. The information provided by the application includes: park name, park address, activies available and brief description/history of the park.
                    </p>
                    <h6 class="technologies-used-left">Technologies Used:</h6>
                    <DiJqueryLogo size={50} class="logo-left" />
                    <DiHtml5 size={50} class="logo-left" />
                    <DiJavascript1 size={50} class="logo-left" />
                    <DiCss3 size={50} class="logo-left" />
                    <BsGeoAlt size={50} class="logo-left" />
                    <div class="a-div-left">
                        <a target="_blank" rel="noreferrer" href="https://github.com/guie01/Project-W7-Group-5" class='a-right'>Github</a>
                        <a target="_blank" rel="noreferrer" href="https://guie01.github.io/Project-W7-Group-5/form.html" class='a-right'>Deployed App</a>
                    </div>
                    <hr class="hr-line"></hr>
                </div>
            </div>

            <div class="project-container">
                <img src={image3} alt='Project Sample' class="project-img-left"></img>
                <h2 class="title-right">User Directory</h2>
                <p class="description-right">
                    An employee/user directory web application to track non-sensitive data. The web app is capable of sorting first and last name alphabetically, and users/managers can search specific employees by name in the search bar.
                </p>
                <h6 class="technologies-used-right">Technologies Used:</h6>
                <DiReact size={50} class="logo-right" />
                <DiHtml5 size={50} class="logo-right" />
                <DiCss3 size={50} class="logo-right" />

                <div class="a-div-right">
                    <a target="_blank" rel="noreferrer" href="https://github.com/guie01/User-Directory" class='a-right'>Github</a>
                    <a target="_blank" rel="noreferrer" href="https://secure-crag-21869.herokuapp.com/" class='a-right'>Deployed App</a>
                </div>
                
            </div>

        </div>

    )
}

export default Project
