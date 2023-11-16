import Leet from './leetcode/Leetcode';
import Codeforces from './codeforces/cf.jsx'
import GetData from './leetcode/api/api';

function App() {
    return (
        <div>
            <Leet/>
            <GetData/>
            <Codeforces/>
        </div>
    );
}

export default App;
