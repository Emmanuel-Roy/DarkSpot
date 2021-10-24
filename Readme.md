## DarkSpot


DarkSpot

An application used to detect melanoma, a type of skin cancer, using machine learning, built with React, Tensorflow, JavaScript, and CSS.

## Project Status
Complete


## Project Screen Shot(s)

#### Example:   
![Image 10-24-21 at 9 46 AM](https://user-images.githubusercontent.com/65556383/138599354-04abe9fd-d7a8-4bc9-b12b-463c57f0522d.jpeg)

![Image 10-24-21 at 9 50 AM](https://user-images.githubusercontent.com/65556383/138599440-d10993b9-4092-4448-8032-24836cf75664.jpg)

## Installation and Setup Instructions


#### Example:  

Clone down this repository. You will need `node` and `npm` installed globally on your machine.  

Installation:

`npm install`  

To Run Test Suite:  

`npm test`  

To Start Server:

`npm start`  

To Visit App:

`localhost:3000`  

## How we did it 

This was a 36 hour long project built during HackTAMS at the Texas Academy of Math and Science. Project goals included using technologies learned up until this point and familiarizing myself with documentation for new features.  

Originally we wanted to build an application that allowed users to classify whether a mole was melanoma or not. we started this process by using the `create-react-app` boilerplate, then adding `react-router-dom`, `tailwindcss`, and `NES.CSS`.  

One of the main challenges we ran into was the actual image classification and the video rendering. This lead us to spend a few hours on html videos, less common react depedency components, and overall Tensorflow-React collaboration. 

At the end of the day, the technologies implemented in this project are React, React-Router-Dom, TailwindCSS, NES.CSS, Tensorflow, and ML5. We chose to use the `create-react-app` boilerplate to minimize initial setup and invest more time in diving into weird design rabbit holes. In the next iteration we plan on adding a numerical descrption and accuracy of the image classification.
