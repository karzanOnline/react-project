require('fetch-ie8');

const React = require('react');
const render = require('react-dom').render;
import './css/common.scss';
import Header from './components/Header.js';
import Content from './components/Content.js';

const Action = React.createClass({
    getInitialState(){
        return{

        }

    },
    render (){
        return (
            <div>
                <Header/>
                <Content/>
            </div>
        )
    }

});

render(
  <Action/>,
  document.getElementById('app')
)
