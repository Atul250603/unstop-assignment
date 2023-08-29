import { Routes,Route } from "react-router-dom";
import AssessmentForm from "./components/AssessmentForm";
import MainPanel from "./components/MainPanel";
import SidePanel from "./components/SidePanel";
import './styles/style.css';
import { useState } from 'react';
import UnknownPage from "./components/UnknownPage";
import AssessmentsPage from "./components/AssessmentsPage";
import { Toaster } from "react-hot-toast";
function App() {
  const [displayForm,setDisplayForm]=useState(false);
  const [assessment,setAssessment]=useState([{
    name:"Maths Assessment",
    purpose:"Job",
    skills:["ReactJS, NodeJS, MongoDB, ExpressJS"],
    date:"04-20-2023",
    numQuestions:"10",
    duration:"01:30:00"
  },
  {
    name:"Maths Assessment",
    purpose:"Job",
    skills:["ReactJS, NodeJS, MongoDB, ExpressJS"],
    date:"04-20-2023",
    numQuestions:"10",
    duration:"01:30:00"
  },
  {
    name:"Maths Assessment",
    purpose:"Job",
    skills:["ReactJS, NodeJS, MongoDB, ExpressJS"],
    date:"04-20-2023",
    numQuestions:"10",
    duration:"01:30:00"
  },
  {
    name:"Maths Assessment",
    purpose:"Job",
    skills:["ReactJS, NodeJS, MongoDB, ExpressJS"],
    date:"04-20-2023",
    numQuestions:"10",
    duration:"01:30:00"
  },
  {
    name:"Maths Assessment",
    purpose:"Job",
    skills:["ReactJS, NodeJS, MongoDB, ExpressJS"],
    date:"04-20-2023",
    numQuestions:"10",
    duration:"01:30:00"
  }]);
  const [showStats,setShowStats]=useState(false);
  const [showSidePanel,setShowSidePanel]=useState(false);
  return (
    <>
      <Toaster position="top-right" reverseOrder={false} toastOptions={{className:'toast-text'}}/>
      <div className={`main ${(displayForm || showSidePanel)?"hideOverflow":""}`}>
        <SidePanel showSidePanel={showSidePanel} setShowSidePanel={setShowSidePanel}/>
        <Routes>
          <Route exact path="/" element={ <MainPanel showSidePanel={showSidePanel} setShowSidePanel={setShowSidePanel}/>}>
            <Route path="" element={<AssessmentsPage displayForm={displayForm} setDisplayForm={setDisplayForm} assessment={assessment} showStats={showStats} setShowStats={setShowStats} />}/>
            <Route path="*" element={<UnknownPage/>}/>
          </Route>
        </Routes>
        {
          (displayForm)?<AssessmentForm displayForm={displayForm} setDisplayForm={setDisplayForm} assessment={assessment} setAssessment={setAssessment}/>:<></>
        }
      </div>
      </>
    );
}

export default App;
