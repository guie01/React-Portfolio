import React from 'react';
import "./style.css";
import image from "../../assets/avataaars.png";
import pdf from "../../assets/GUILLERMO GARCIA RESUME (1).pdf"
import { DiGithubAlt } from "react-icons/di"
import { FaLinkedinIn } from "react-icons/fa"
import { HiDocumentDownload } from "react-icons/hi"

const Welcome = () => {
    return (
        <div>
            <section class="welcome-main-body">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6 col-md-12" id="salute-all">
                            <h3 class="salute">Hello there!</h3>
                            <h1 class="text-salute">My name is Guillermo</h1>
                            <h4 class="text-title">Full Stack Developer</h4>
                            <a target="_blank" rel="noreferrer" href="https://github.com/guie01" class="icon-cover"><DiGithubAlt/></a>
                            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/guillermo-garcia-236529b0/" class="icon-cover"><FaLinkedinIn/></a>
                            <a target="_blank" rel="noreferrer" href={pdf} class="icon-cover"><HiDocumentDownload/></a>
                        </div>
                        <div class="col-lg-6 col-md-12">
                            <img src={image} class="img-fluid" alt="logo"></img>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Welcome
