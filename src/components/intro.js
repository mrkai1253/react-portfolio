import  React  from 'react';
import { Avatar ,Icon} from 'antd';
import './intro.css';
import { Button } from 'antd/lib/button';


const intro = (props) => {
    return(
        <div className = "intro-div">
        
            <Avatar size={150}  src="https://lh3.googleusercontent.com/-pxLi-1mpJis/WrcxcfaplSI/AAAAAAAAAAs/d1QrqrLq3ZoEyuMLnqGKJQRlzd1q9qJsACEwYBhgL/w140-h140-p/me.jpeg" />
            <h2 className = "my-name">Asish Shaji Thomas</h2>
            <span className = "about">Django Developer</span>
            <a href="https://github.com/mrkai1253 " target ="_blank">
                         <Icon type="github" style={{ fontSize: 25, color: '#08c',marginTop:'20px',marginRight:'20px',color:'#21242c'}}  />
            </a>
            <a href = "https://twitter.com/AsishShajiThom1" target ="_blank">
                     <Icon type="twitter" style={{ fontSize: 25, color: '#08c',marginTop:'20px',color:'#21242c'}}  />
            </a>

            <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            </div>
    );
};

export default intro;