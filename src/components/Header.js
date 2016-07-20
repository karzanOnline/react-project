import React,{Component} from 'react';
import '../css/header.scss';
export default class Header extends Component{

    constructor(props,context){
        super(props,context);
        this.state ={
            text : ''
        };
    }

    handelChange(e){
        this.setState({
            text : e.target.value
        });
    }

    handelClick(){
        this.props.actions.addTodo(this.state.text);
        this.setState({
            text : ''
        });
    }

    render(){
        const {addTodo} = this.props;
        return (
            <div className="header-style">
                <span className="right">Signed in as Member</span>
                <i></i>
                <span className="right">Sign out</span>
            </div>
        );
    }
}
module.exports = Header;