import React from 'react';
import ReactDOM from 'react-dom';
import {Router,Route,IndexRoute,hashHistory} from 'react-router'
import App from './components/app';
import NewsContainer from './components/news_container';
import NewsDetail from './components/news_detail';
import UserCenter from './components/user_center';


ReactDOM.render((
    /*根标签*/
    <Router history={hashHistory}>
        {/*配置根路由 component 跟着跟路由组件*/}
        <Route path="/" component={App}>
            {/*写子路由*/}
            <IndexRoute component={NewsContainer}></IndexRoute>
            <Route path="/detail/:unique" component={NewsDetail}/>
            <Route path="/userCenter" component={UserCenter}/>
            {/*配置好路由 component 跟着跟路由组件*/}
        </Route>
    </Router>
), document.getElementById('root'));

