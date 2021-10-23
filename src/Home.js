import React from "react";
import SideBar from './SideBar';
import Video from './Video'



export const Home = () => {
    return (
        <div class="nes-container mx-4 my-4 h-screen overflow-auto bg-gradient-to-r from-purple-400 via-red-500 to-yellow-600">
            <div>
            <SideBar/>
            <Video/>
            </div>
        </div>
    )
}

export default Home;