import React from "react"
import Projectshelp from "./Projectshelp" 
function projects ()
{
    return (
        <div>
           <Projectshelp 
        heading="Full Stack Educational Web Application"
         description="The application is full stack Web application"
          technologyUsed="Nodejs,Mongodb,EJS,AWS,Multer"
          timeframe="09/2022 - 11/2022"  />
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