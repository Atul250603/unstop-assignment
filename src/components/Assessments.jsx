import AssessmentCard from "./AssessmentCard";
import CreateAssessment from "./CreateAssessment";
import searchIcon from '../svgs/searchIcon.svg';
import filterIcon from '../svgs/filterIcon.svg';
import barchartIcon from '../svgs/barchartIcon.svg';
import '../styles/style.css';
function Assessments({displayForm,setDisplayForm,assessment,showStats,setShowStats}){
    function showStatsHandler(){
        if(showStats){
            setShowStats(false);
        }
        else{
            setShowStats(true);
        }
    }
    return(
        <div className="myAssessment">
            <div className="myAssessment-top-panel">
                <div className="mainPanel-heading">My Assessment</div>
                <div className="mainPanel-icons">
                    <div className="filter-icons"><img src={searchIcon} alt="search-icon"/></div>
                    <div className="filter-icons"><img src={filterIcon} alt="filter-icon"/></div>
                    <div className={`filter-icons ${(showStats)?"selected-filter-icon":""}`} onClick={()=>showStatsHandler()} ><img src={barchartIcon} alt="barchart-icon"/></div>
                </div>
            </div>
            <div className="assessmentCards">
                <CreateAssessment displayForm={displayForm} setDisplayForm={setDisplayForm}/>
                {
                    assessment.length>0?assessment.map((element,key)=>{
                        return <AssessmentCard cardDetails={element} key={key}/>
                    }):<></>
                }
            </div>
        </div>
    )
}
export default Assessments;