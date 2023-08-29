import addIcon from '../svgs/addIcon.svg';
import '../styles/style.css';
function CreateAssessment({displayForm,setDisplayForm}){
    return(
        <div className='card create-Card'>
            <div className='addIcon' onClick={()=>{setDisplayForm(true)}}>
                <img src={addIcon} alt='add-icon'/>
            </div>
            <div className="mainPanel-heading">New Assessment</div>
            <div className='card-subtext'>From here you can add questions of multiple types like MCQs, subjective (text or paragraph)!</div>
        </div>
    )
}
export default CreateAssessment;