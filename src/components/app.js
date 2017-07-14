//根路由应用组件
import React from 'react'
//'news_header' 修改为 './news_header' "./"不加会报错
import NewsHeader from './news_header'
export default class App extends React.Component{
    render(){
        return (
            <div>
                <NewsHeader/>
                {this.props.children}
                <div>header component...</div>
            </div>
        )
    }
}
