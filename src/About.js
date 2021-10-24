import SideBar from './SideBar';
import React from 'react';

function About() {
  return (
    <div class="nes-container mx-4 mt-4 h-screen overflow-auto mb-4 bg-gradient-to-r from-purple-600 via-red-500 to-yellow-500">
        <SideBar/>
        
        <div class="max-w-6xl px-12 mx-auto text-center">
            <div class="space-y-12 md:text-center">
                <div class="max-w-3xl mb-10 space-y-5 sm:mx-auto sm:space-y-4">
                    <h2 class="relative text-4xl font-extrabold tracking-tight sm:text-5xl">Meet Our Team</h2>
                    <p class="text-xl text-black">We take pride in the people we work with. This is because we all collectively help each other become more awesome every day.</p>
                </div>
            </div>
    
            <div class="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
                <div class="w-full border border-gray-200 rounded-lg shadow-sm">
    
                    <div class="flex flex-col items-center justify-center p-10">
                        <img class="w-32 h-32 mb-6 rounded-full" src="./dhiraj.png"/>
                        <h2 class="text-lg font-medium">Dhiraj Bijinepally</h2>
                        <p class="font-medium text-blue-500">Front-end designer </p>
                        <p class="text-black">Created the about page and basic CSS
                    </p></div>
    
                </div>
    
                <div class="w-full border border-gray-200 rounded-lg shadow-sm">
    
                    <div class="flex flex-col items-center justify-center p-10">
                        <img class="w-32 h-32 mb-6 rounded-full" src="./emmanuel.png"/>
                        <h2 class="text-lg font-medium">Emmanuel Roy</h2>
                        <p class="font-medium text-blue-500">Backend designer</p>
                        <p class="text-black">Trained machine learning model
                    </p></div>
    
    
                </div>
    
                <div class="w-full border border-gray-200 rounded-lg shadow-sm">
    
                    <div class="flex flex-col items-center justify-center p-10">
                        <img class="w-32 h-32 mb-6 rounded-full" src="./nathan.png"/>
                        <h2 class="text-lg font-medium">Nathan Brito</h2>
                        <p class="font-medium text-blue-500">Presenter</p>
                        <p class="text-black">Technical presentation
                    </p></div>
    
    
                </div>
    
                <div class="w-full border border-gray-200 rounded-lg shadow-sm">
    
                    <div class="flex flex-col items-center justify-center p-10">
                        <img class="w-32 h-32 mb-6 rounded-full" src="./daniel.png"/>
                        <h2 class="text-lg font-medium">Danial Xiao</h2>
                        <p class="font-medium text-blue-500">Lead Designer</p>
                        <p class="text-black">Worked on everything front-end
                    </p></div>
    
    
                </div>
    
    
            </div>
    
        </div>
    </div>
  );
}

export default About;
