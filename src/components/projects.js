import  React  from 'react';
import { Avatar ,Icon} from 'antd';
import './projects.css';

import Card from './card';




const projects = (props) => {
    return(
        <div className='proj-div'>
            <Icon size = {200} type="code-o" style = {{ fontSize: 60, color: '#08c',marginTop:'20px',marginRight:'20px',color:'#21242c'}} />
        
            <Card/>
        
        </div>
    );
};

export default projects;