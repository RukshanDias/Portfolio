import React from "react";
import coverImg from "../../assets/coverImg.png";
import "./Home.css";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

const Home = () => {
    return (
        <section class="flex bg-gradient-to-r from-gray-300 to-white dark:bg-gray-900 h-[90vh]">
            <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 content-center">
                <div class="mr-auto place-self-center lg:col-span-7">
                    <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
                        Rukshan Dias
                    </h1>
                    <p class="max-w-2xl mb-6 font-light text-gray-700 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-500">
                        Software Engineer Undergraduate
                    </p>
                    <div className="flex text-4xl justify-center gap-5 mb-6">
                        <a href="https://github.com/RukshanDias" target="_blank" rel="noopener noreferrer" alt="GitHub">
                            <AiFillGithub />
                        </a>
                        <a href="https://www.linkedin.com/in/rukshan-dias-4b7a22231/" target="_blank" rel="noopener noreferrer" alt="linkedin">
                            <AiFillLinkedin />
                        </a>
                    </div>
                    <a
                        href="https://drive.google.com/file/d/1gjB08gMU-mKZaH4hGs4ApRDoI7QsnmrD/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                    >
                        View CV <BsFillArrowRightCircleFill className="ml-2" />
                    </a>
                </div>
                <div class="cover_img hidden lg:mt-0 lg:col-span-5  lg:flex">
                    <img src={coverImg} alt="coverImg" className="" />
                </div>
            </div>
        </section>
    );
};

export default Home;
