import {useState,useEffect,useRef} from 'react'
import axios from 'axios';
import Leetcode from './api';
import './leet.css';
import Logo from './leetcode.ico'
import ProgressBar from "@ramonak/react-progress-bar";
import { CircularProgressbar} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { CiStar } from "react-icons/ci";
import { FiAward } from "react-icons/fi";
import { IoShieldCheckmarkOutline } from "react-icons/io5";


function Leet(){

    //Fetch Leetcode stats
    const [profile, setProfile] = useState([]);

    useEffect(()=>{
        const getProfile = async () => {
            // Fetch Leetcode stats
            let leetcodeData = JSON.parse(localStorage.getItem('leetcode'));
            const leetcodeTimestamp = localStorage.getItem('leetcodeTimestamp');
            if (!leetcodeData || Date.now() - leetcodeTimestamp >300000) {
                const response = await axios.get('https://ayushman-sinha-yc4d.vercel.app/api/routes/leetcode');
                leetcodeData = response.data;
                localStorage.setItem('leetcode', JSON.stringify(response.data));
                localStorage.setItem('leetcodeTimestamp', Date.now());
            }
            setProfile(leetcodeData);
        };
        getProfile();
    },[]);



    var userName = profile.data&&(profile.data.matchedUser.username);
    var easyAC = profile.data&&(profile.data.matchedUser.submitStats.acSubmissionNum[1].count);
    var easyTotal =  profile?.data?.allQuestionsCount?.[1]?.count;
    var mediumAC = profile.data&&(profile.data.matchedUser.submitStats.acSubmissionNum[2].count);
    var mediumTotal = 1111;
    var hardAC = profile.data&&(profile.data.matchedUser.submitStats.acSubmissionNum[3].count);
    var hardTotal = 1111;
    var totalAC = easyAC + mediumAC + hardAC;
    var total = easyTotal + mediumTotal + hardTotal;



    return (
        <div className="container">
            {profile.data
            ?<div className="main">
                <div className='head'>
                    <img 
                        className='leet-img'
                        src={Logo} 
                        style={{ width:28,
                                 height:28}}
                        alt="logo"/>
                    {userName} LeetCode
                </div>
                <div className="title">
                    Solved Problems
                </div>
                <div className="content">
                    <div className="circle-progress">
                        <CircularProgressbar 
                            value={totalAC} 
                            text={`${totalAC}`}
                            minValue={0}
                            maxValue={total}
                        
                            styles={{
                                root: {},
                                path: {
                                    stroke: `rgba(250,164,11)`,
                                    strokeLinecap: 'butt',
                                    transition: 'stroke-dashoffset 0.5s ease 0s',
                                    transform: 'rotate(0.25turn)',
                                    transformOrigin: 'center center',
                                },
                                trail: {
                                    stroke: 'rgb(240,248,255)',
                                    transform: 'rotate(0.25turn)',
                                    transformOrigin: 'center center',
                                },
                                text: {
                                    fill: 'rgba(250,164,11)',
                                    fontSize: '20px',
                                },
                            }}
                        />
                    </div>
                    <div className="bar-progress">
                        <div className='sub'>
                            <div className='sub-sub'>
                                <div>Easy</div>
                                <div>{easyAC}/{easyTotal}</div>
                            </div>
                            <ProgressBar 
                                completed={easyAC}
                                maxCompleted={easyTotal}
                                baseBgColor={'#294D35'}
                                bgColor={'#00B8A3'}
                                height={10}
                                labelColor={'#00B8A3'}
                            />
                        </div>
                        <div className='sub'>
                            <div className='sub-sub'>
                                <div>Medium</div>
                                <div>{mediumAC}/{mediumTotal}</div>
                            </div>
                            <ProgressBar
                                completed={mediumAC}
                                maxCompleted={mediumTotal}
                                baseBgColor={'#5E4E26'}
                                bgColor={'#FFC01E'}
                                height={10}
                                labelColor={'#FFC01E'}
                            />
                        </div>
                        <div className='sub'>
                            <div className='sub-sub'>
                                <div>Hard</div>
                                <div>{hardAC}/{hardTotal}</div>
                            </div>
                            <ProgressBar
                                completed={hardAC}
                                maxCompleted={hardTotal}
                                baseBgColor={'#5A302F'}
                                bgColor={'#EF4743'}
                                height={10}
                                labelColor={'#EF4743'}
                            />
                        </div>
                    </div>
                </div>
                <div className="details">
                    <CiStar 
                        className='det-img'
                    />
                    <div className='det-sub'>
                        <div>Contest Rating</div>
                        <div>{profile.data&&(profile.data.userContestRanking.rating).toFixed(2)}</div>
                    </div>
                </div>
                <div className="details">
                    <FiAward 
                        className='det-img'
                    />
                    <div className='det-sub'>
                        <div>Attended </div>
                        <div>{profile.data&&(profile.data.userContestRanking.attendedContestsCount.toFixed(0))}</div>
                    </div>
                    
                </div>
                <div className="details">
                    <IoShieldCheckmarkOutline
                        className='det-img'
                    />
                    <div className='det-sub'>
                        <div>Top </div>
                        <div>{profile.data&&(profile.data.userContestRanking.topPercentage.toFixed(2))}%</div>
                    </div>
                    
                </div>
            </div>
            :<div className='loading_text'>Loading....</div>}
        </div>
    )
}

export default Leet;