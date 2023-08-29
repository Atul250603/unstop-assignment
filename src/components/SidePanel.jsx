import dashboardIcon from '../svgs/dashboardIcon.svg';
import mylibIcon from '../svgs/mylibIcon.svg';
import assessmentIcon from '../svgs/assessmentIcon.svg';
import stroke from '../svgs/stroke.svg';
import roundstatusIcon from '../svgs/roundstatusIcon.svg';
import crossIcon from '../svgs/crossIcon.svg';
import { useLocation, useNavigate } from 'react-router-dom';
function SidePanel({showSidePanel,setShowSidePanel}){
    const navigate=useNavigate();
    const location=useLocation();
    const path=(location.pathname).substring(1);
    function navigationHandler(type){
        if(type==="dashboard"){
            navigate(`/${type}`);
        }
        else if(type==="assessment"){
            navigate(`/`);
        }
        else if(type==="library"){
            navigate(`/${type}`);
        }
        else if(type==="roundStatus"){
            navigate(`/${type}`);
        }
    };
    return (
        <div className={`sidePanel ${(showSidePanel)?"sidepanel-mobile":""}`}>
            {(showSidePanel)?<div className='sidepanel-top-bar'>
                <div>Menu</div>
                <div onClick={()=>{setShowSidePanel(false)}}>
                    <img src={crossIcon} alt='cross-icon'/>
                </div>
            </div>:<></>}
            <div className={`sidePanelItem ${(path==="dashboard")?"selected":""}`}  onClick={()=>{navigationHandler("dashboard")}}>
                <div>
                    <img src={dashboardIcon} alt='dashboard-icon'/>
                </div>
                <div>
                    Dashboard
                </div>
            </div>
            <div  className={`sidePanelItem ${(path==="")?"selected":""}`}  onClick={()=>{navigationHandler("assessment")}}>
                <div>
                    <img src={assessmentIcon} alt='assessment-icon'/>
                </div>
                <div>
                    Assessment
                </div>
            </div>
            <div className={`sidePanelItem ${(path==="library")?"selected":""}`}  onClick={()=>{navigationHandler("library")}}>
                <div>
                    <img src={mylibIcon} alt='library-icon'/>
                </div>
                <div>
                    My Library
                </div>
            </div>
            <div className='horizontalStroke'>
                <img src={stroke} alt='stroke-icon'/>
            </div>
            <div className={`sidePanelItem ${(path==="roundStatus")?"selected":""}`} onClick={()=>{navigationHandler("roundStatus")}}>
                <div className='adminTag'>
                    Admin
                </div>
                <div>
                <div>
                    <img src={roundstatusIcon} alt='round-status-icon'/>
                </div>
                <div>
                    Round Status
                </div>
            </div>
            </div>
        </div>
    )
}
export default SidePanel;