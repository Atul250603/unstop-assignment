import smallCross from '../svgs/smallCross.svg';
function SkillBox({skill,skills,setSkills}){
    function removeSkill(){
        const idx=skills.indexOf(skill);
        let tempSkills=[...skills];
        tempSkills.splice(idx,1);
        setSkills(tempSkills);
    }
    return(
        <div className='skillBox'>
            <div>{skill}</div>
            <div className='smallCrossIcon' onClick={()=>{removeSkill()}}>
                <img src={smallCross} alt='cross-icon'/>
            </div>
        </div>
    );
}
export default SkillBox;