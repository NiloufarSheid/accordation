
import { useState } from "react"
import Questions from "./Questions"
import data from "./data"



function App() {
 
const [questions , setQuestions]=useState(data)

  return (
    <div className="container">
      <h3>سوالات</h3>
      <div> 
        {questions.map((question, index)=>{
        return <Questions  key={index} {...question}/>
      } ) 
        }
      </div>
      
      
    </div>
  )
}

export default App
