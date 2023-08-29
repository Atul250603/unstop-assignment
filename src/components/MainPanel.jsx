import navbar from '../svgs/navbar.svg';
import mobile from '../svgs/mobile.svg';
import laptopIcon from '../svgs/laptopIcon.svg';
import verticalStroke from '../svgs/verticalStroke.svg';
import { NavLink, Outlet } from 'react-router-dom';

function MainPanel({showSidePanel,setShowSidePanel}){
    function showSidePanelHandler(){
        if(showSidePanel){
            setShowSidePanel(false);
        }
        else{
            setShowSidePanel(true);
        }
    }
    return(
        <div className='mainPanel'>
            <div className='topBar'>
                <div className='topBar-heading'>
                    <div className='hamburger-logo' onClick={()=>showSidePanelHandler()}>
                        <img src={navbar} alt="hamburger-icon"/>
                    </div>
                    <div>
                        Assessment
                    </div>
                </div>
                <div className='verticalStroke'>
                    <img src={verticalStroke} alt="stroke-icon"/>
                </div>
                <div className='topBar-subheading'>
                    <div className='topBar-subheadingList laptop'>
                        <div className='subheading'><NavLink to="/" className={({ isActive,isPending}) =>isActive ? "selected-subheading" : ""}>My Assessments</NavLink></div>
                        <div className='subheading'><NavLink to="/unstopassessments" className={({ isActive,isPending}) =>isActive ? "selected-subheading" : ""}>Unstop Assessments</NavLink></div>
                    </div>
                    <div>
                        <img src={mobile} className='mobileIcon' alt="mobile-icon"/>
                        <img src={laptopIcon} className='laptopIcon' alt="laptop-icon"/>
                    </div>
                </div>
            </div>
            <div className='topBar-subheadingList mobile'>
                    <div className='subheading'><NavLink to="/" className={({ isActive,isPending}) =>isActive ? "selected-subheading" : ""}>My Assessments</NavLink></div>
                    <div className='subheading'><NavLink to="/unstopassessments" className={({ isActive,isPending}) =>isActive ? "selected-subheading" : ""}>Unstop Assessments</NavLink></div>
            </div>
            <Outlet/>
        </div>
    )
}
export default MainPanel;