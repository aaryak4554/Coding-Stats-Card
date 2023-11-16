import './cf.css'
import Logo from './code-forces.ico';
import { CiStar } from "react-icons/ci";
import { FiAward } from "react-icons/fi";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { RiCheckDoubleLine } from "react-icons/ri";
import { VscFileSymlinkFile } from "react-icons/vsc";
import { RxCross1 } from "react-icons/rx";


function Codeforces(){
    return (
        <div className="main-cf">
            <div className='head-cf'>
                <img
                    className='cf-img'
                    src={Logo}
                    style={{width:45, 
                            height:45}}
                    alt="logo"
                />
                <div>akhilg1's CodeForces</div>
            </div>
            <div className='content-cf'>
                <div>Pupil (Max: Pupil) | Since 2 years</div>
            </div>
            <div>
                <div className="details-cf">
                    <CiStar className='det-img-cf'/>
                    <div className='det-sub-cf'>
                        <div>Contest Rating</div>
                        <div>8888</div>
                    </div>
                </div>
                <div className="details-cf">
                    <FiAward className='det-img-cf'/>
                    <div className='det-sub'>
                        <div>Max Rating </div>
                        <div>8888</div>
                    </div>
                </div>
                <div className="details-cf">
                    <IoShieldCheckmarkOutline className='det-img-cf'/>
                    <div className='det-sub-cf'>
                        <div>Attended </div>
                        <div>8888</div>
                    </div>
                </div>
                <div className="details-cf">
                    <RiCheckDoubleLine className='det-img-cf'/>
                    <div className='det-sub'>
                        <div>Accepted</div>
                        <div>8888</div>
                    </div>
                </div>
                <div className="details-cf">
                    <RxCross1 className='det-img-cf'/>
                    <div className='det-sub-cf'>
                        <div>Wrong Answers</div>
                        <div>8888</div>
                    </div>
                </div>
                <div className="details-cf">
                    <VscFileSymlinkFile className='det-img-cf'/>
                    <div className='det-sub-cf'>
                        <div>Contributions</div>
                        <div>8888</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Codeforces