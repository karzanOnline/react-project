import React,{Component} from 'react';
import '../css/content.scss';

//const TAG_TEMP = ['DASHBOARD','MY CRUISE','AGENTS','HELP'].map((item)=>{
//    return {text:item,state:false}
//})
export default class Content extends Component{
    constructor (props){
        super(props);
        this.state = {
            /*
            * text是文字  show状态控制当前点击的是否显示
            * */
            tagArr : ['DASHBOARD','MY CRUISE','AGENTS','HELP'].map((item)=>{
                return {text:item,show:false}
            }),
            selectArr : ['All','']
        }
    }
    componentDidMount(){

    }
    styleChange (index){
        /*
        * 将tagArr state初始化
        * */
        let _this = this;
        let tagArr = ['DASHBOARD','MY CRUISE','AGENTS','HELP'].map((item)=>{
            return {text:item,state:false}
        });
        /*
        * 改变选中state
        * */
        tagArr[index]['state'] = true;
        _this.setState({tagArr : tagArr});
    }
    getTagShow(sign){
        let _this = this;
        let arr = _this.state.tagArr,
            tempArr;

        /*
        * state 控制是否显示
        * */
        if (sign=='tagArr'){
            tempArr = arr.map((item,index)=>{
                return <tag className={item.state?'right tag-click':'right'}style={index==0?{margin:'0'}:{marginRight:'10px'}} key={index} onClick={_this.styleChange.bind(_this,index)}>{item.text}</tag>
            });
        }else {
           /*
           * 则这里实现agents标签的切换 和上面方法一样
           * */
        }

        return tempArr
    }
    render(){
        let _this = this;
        return (
            <div style={{padding:'10px'}}>
                <div className="content-style clear">
                    <div className="clear absolute-style">
                        <h1 className="left">Cruise</h1>
                        {_this.getTagShow('tagArr')}
                    </div>
                    <content className="clear">
                        <div className="content-title-main clear">
                            {/*agents 的颜色没有ui图取不到最精确的颜色 用#fff代替*/}
                            <h3 className="left">Agents</h3>
                            {/*这里切换效果的做法可以getTagShow（'参数'）公用同一个方法 我看也没有要求 就不写了*/}
                            <tagChoose className="left">all</tagChoose>
                            <tagChoose className="left">Physical</tagChoose>
                            <tagChoose className="left">Virtual</tagChoose>
                        </div>
                        <div className="content-flex-style clear">
                            <div className="flex-width">
                                <div></div>
                            </div>
                            <div className="flex-absolute">
                                right
                            </div>
                        </div>


                    </content>

                </div>
            </div>
        );
    }
}