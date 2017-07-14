//包含各种新闻列表的容器组件
import React from 'react'
import {Link} from 'react-router'
export default class NewsContainer extends React.Component{
    render(){
        return (
            <div>
               <ul>
                   <li>
                       <Link to="/detail/1">新闻1</Link>
                   </li>
                   <li>
                       <Link to="/detail/2">新闻2</Link>
                   </li>
                   <br/>
                   <li>
                       <Link to="userCenter">个人中心</Link>
                   </li>
               </ul>
            </div>
        )
    }
}