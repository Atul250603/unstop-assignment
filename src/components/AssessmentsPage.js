import AssessmentStats from "./AssessmentStats";
import Assessments from "./Assessments";
import addIcon from '../svgs/addIcon.svg';
function AssessmentsPage({displayForm,setDisplayForm,assessment,showStats,setShowStats}){
    return(
    <div className='mainPanel-data'>
            <AssessmentStats showStats={showStats}/>
            <Assessments displayForm={displayForm} setDisplayForm={setDisplayForm} assessment={assessment} showStats={showStats} setShowStats={setShowStats}/>
            <div className="create-icon" onClick={()=>{setDisplayForm(true)}}>
                <img src={addIcon} alt="add-icon"/>
            </div>
    </div>
    );
}
export default AssessmentsPage;