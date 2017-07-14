//新闻详情组件
import React from 'react'

export default class NewsDetail extends React.Component{
    render(){
        return (
            <div>
                <div>新闻详情 unique为：{this.props.params.unique}</div>
            </div>
        )
    }
}