import React from "react"
import Projectshelp from "./Projectshelp" 
function projects ()
{
    return (
        <div>
           <Projectshelp 
        heading="Netflix Clone Front End Application with Movie Trailer of Movies Hosted live"
         description="The application is front end based.Website link:https://netflixclone-65446.web.app/"
          technologyUsed="React Js,APIS,Axios"
          timeframe="01/2023 - 01/2023"  />

           <Projectshelp 
        heading="Personalised Portfolio Website using React Js"
         description="The application is front end based on React.Website link:https://portfoliowebsite-c6c8e.web.app/"
          technologyUsed="React JS"
          timeframe="01/2023 - 01/2023"  />
          <Projectshelp 
        heading="Full Stack Blog Web Application"
         description="The application is full stack Web application"
          technologyUsed="Nodejs,Mongodb,EJS"
          timeframe="08/2022 - 09/2022"  />
          <Projectshelp 
        heading="Full Stack To-do list Web Application"
         description="The application is full stack Web application"
          technologyUsed="Nodejs,Mongodb,EJS"
          timeframe="08/2022 - 09/2022"  />
          <Projectshelp 
        heading="Data Compression of text files"
         description="A Data Structure based based c++ project
based on algorithm like huffman coding, Run Length Encoding"
          technologyUsed="C++"
          timeframe="11/2021 - 12/2021"  />
        </div>
        
    )
}
export default projects