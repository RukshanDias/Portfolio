import React from "react";
import { AiOutlineMail } from "react-icons/ai";

const Contact = () => {
    return (
        <div id="contact" class="container my-24 px-6 mx-auto">
            <h1 className="mb-5 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl lg:text-5xl">
                Contact Me
            </h1>
            <div className="flex justify-center">
                <AiOutlineMail className="mt-1 mr-2 text-2xl"/>
                <h1 className="text-center text-2xl">rukshandias002@gmail.com</h1>
            </div>
        </div>
    );
};

export default Contact;
