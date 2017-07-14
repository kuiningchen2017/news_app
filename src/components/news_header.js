/**
 * 新闻头部组件  头部的logo 标题栏 登录注册按钮 全部在此组件里表现出来
 */
import React from 'react'

//app.js是整体结构 也就是根路由组件 把头部组件引入到app.js中
export default class NewsHeader extends React.Component{
    constructor(props){
        super(props)
        //初始化状态 登录注册 和 没登录注册时 两张状态不同
        this.state = {
            username:null
        }
    }
    render(){
        return(
            <header>
                {/*要使用antd的组件*/}
            </header>
        )
    }
}