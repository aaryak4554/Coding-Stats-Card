import './leet.css';
import ProgressBar from "@ramonak/react-progress-bar";
import { CircularProgressbar} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function Leet(){
    // const percentage=66;
    return (
        <div className="main"> 
            <div className="title">
                Solved Problems
            </div>
            <div className="content">
                <div className="circle-progress">
                    <CircularProgressbar 
                        value={60} 
                        text={`10`}
                        minValue={0}
                        maxValue={100}
                       
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
                            <div>191/245</div>
                        </div>
                        <ProgressBar 
                            completed={10}
                            maxCompleted={100}
                            baseBgColor={'#294D35'}
                            bgColor={'#00B8A3'}
                            height={10}
                            labelColor={'#00B8A3'}
                        />
                    </div>
                    <div className='sub'>
                        <div className='sub-sub'>
                            <div>Medium</div>
                            <div>191/245</div>
                        </div>
                        <ProgressBar
                            completed={10}
                            maxCompleted={100}
                            baseBgColor={'#5E4E26'}
                            bgColor={'#FFC01E'}
                            height={10}
                            labelColor={'#FFC01E'}
                        />
                    </div>
                    <div className='sub'>
                        <div className='sub-sub'>
                            <div>Hard</div>
                            <div>191/245</div>
                        </div>
                        <ProgressBar
                            completed={10}
                            maxCompleted={100}
                            baseBgColor={'#5A302F'}
                            bgColor={'#EF4743'}
                            height={10}
                            labelColor={'#EF4743'}
                        />
                    </div>
                </div>
            </div>
            <div className="title">
                Contest Rating- 
            </div>
            <div className="title">
                Contest Attended- 
            </div>
        </div>
    );
}

export default Leet;