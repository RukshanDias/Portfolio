import React from "react";
import { projects } from "../../data/projects_data";

const Projects = () => {
    return (
        <div class="container px-6 py-4 mx-auto bg-slate-400">
            <section id="projects" class="mb-32 text-gray-800 text-center">
                <h1 className="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl lg:text-5xl dark:text-white mt-10 mb-10">
                    My Projects
                </h1>

                <div class="grid lg:grid-cols-3 gap-6 xl:gap-x-12 mx-10">
                    {projects.map((element, index) => (
                        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-5 items-center">
                                <img class="rounded-t-lg " src={element.img} alt="" />
                            <div class="p-5">
                                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{element.name}</h5>
                                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{element.description}</p>

                                <div className="flex justify-center my-3">
                                    {element.techStack.map((tech, index) => (
                                        <div className="bg-slate-200 mx-2 my-2 rounded-full p-1.5">
                                            <img src={tech} alt={element.name} className="w-7 h-7   " />
                                        </div>
                                    ))}
                                </div>
                                <div className="flex justify-around">
                                    <a
                                        href={element.github}
                                        target="_blank"
                                        rel="noopener"
                                        class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                    >
                                        View GitHub
                                    </a>

                                    {element.deploy && (
                                        <a
                                            href={element.deploy}
                                            target="_blank"
                                            rel="noopener"
                                            class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                        >
                                            View Live app
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Projects;
