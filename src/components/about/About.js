import React from "react";
import img from "../../assets/coding.svg";

const About = () => {
    return (
        <div id="about">
            <div className="flex justify-around items-center mx-24 my-24">
                <div className="hidden lg:mt-0 lg:col-span-5 lg:flex w-1/3 h-1/3 ">
                    <img src={img} alt="" />
                </div>
                <div className="lg:w-1/2">
                    <h1 className="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl lg:text-5xl dark:text-white">
                        About Me
                    </h1>
                    <p className=" lg:text-xl">
                        A passionate undergraduate seeking to apply knowledge and skills to gain valuable experience through an internship. A quick
                        learner, adaptable, and possess excellent problem-solving skills, which allows to deliver quality solutions. Through my
                        internship, I aim to gain practical experience and enhance technical skills to establish a successful career.
                    </p>
                    <h1 className="mb-4 text-1xl font-extrabold leading-none tracking-tight text-gray-900 md:text-2xl lg:text-2.5xl dark:text-white mt-8">
                        Skills
                    </h1>
                    <div className="flex justify-around gap-6">
                        <ul className="text-left">
                            <li>HTML, CSS, JS(ES6)</li>
                            <li>React Js</li>
                            <li>Python</li>
                            <li>Java</li>
                        </ul>
                        <ul className="text-left">
                            <li>OOP</li>
                            <li>Git / GitHub</li>
                            <li>PHP</li>
                            <li>MySQL</li>
                        </ul>
                        <ul className="text-left">
                            <li>Data Structures & Algorithms</li>
                            <li>NPM package management</li>
                            <li>Agile / Scrum Methodology</li>
                            <li>CI / CD</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
