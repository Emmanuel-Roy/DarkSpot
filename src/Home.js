import React from "react";
import SideBar from './SideBar';
import Video from './Video'



export const Home = () => {
    return (
        <div class="nes-container mx-4 my-4 h-screen overflow-auto bg-gradient-to-r from-purple-600 via-red-500 to-yellow-500">
            <div>
            <SideBar/>
            <div class="text-center mb-10">
            MELANOMA CLASSIFICATION USING MACHINE LEARNING
            </div>
            <Video/>
            </div>
            <div class="text-center mt-16 mx-40">
            This program helps detect a very important problem in this human population. 
            Melanoma! Millions of people are diagnosed with Melanoma every year. 
            The program uses Tensorflow image processing software to find characteristics of melanoma and provides a diagnosis. 
            This diagnosis is based on data found by querying though the internet and should not be taken as absolute.
            </div>
            

        </div>
        
    )
}

export default Home;