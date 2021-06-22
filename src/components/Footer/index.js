import React from 'react'
import { MdEmail } from "react-icons/md"
import { DiGithubAlt } from "react-icons/di"
import { FaLinkedinIn } from "react-icons/fa"
import './style.css'

const Footer = () => {
    return (
        <div>
            <div class="footer-div">
                <a href="mailto:guillegarcia0107@gmail.com" target="_blank" rel="noreferrer"><MdEmail size={50} color="white" class="footer-a"/></a>
                <a href="https://www.linkedin.com/in/guillermo-garcia-236529b0" target="_blank" rel="noreferrer"><FaLinkedinIn size={50} color="white" class="footer-a" id="linkedin-a"/></a>
                <a href="https://github.com/guie01" target="_blank" rel="noreferrer"><DiGithubAlt size={50} color="white" class="footer-a" /></a>
            </div>
        </div>
    )
}

export default Footer
