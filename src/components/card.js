import React from 'react';
import { Card, Icon, Avatar, Row, Col } from 'antd';
import './card.css';


const { Meta } = Card;


const card = () =>{
    return(

    <div className='card-div'>
        <Card
                        style={{ width: 300 ,marginLeft: '30px',marginTop:'30px',alignContent:'center',marginBottom: '20px'}}
                        cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
                        actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
                                                                                                >
            <Meta
                avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                title="Card title"
                description="This is the description"
            />
        </Card>
  </div>
    );
};

export default card;