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
            selectArr : ['All',''],
            /*
            * 展示数据的数组
            * */
            itemData :[],
            addState : false
        }
    }
    componentDidMount(){
        alert('选项卡没有实现完全，没有细化组件。不知道input的具体要求，没有加正则。因为最近加班没有太多的精力去优化，见谅！')
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
    addItemOp (...sign){
        let name = this;
        let _this = sign[0];
        name=='show'?_this.setState({addState:true}):_this.setState({addState:false})
    }
    addItem (){
        let _this = this;
        let value = _this.refs.addItemValue.value;
        let itemData = _this.state.itemData;
        value && (value = value.split(','));
        itemData = itemData.concat(value);
        Array.from(itemData);
        //filter 空元素
        for(var i =itemData.length-1;i>=0;i--){
            if (itemData[i]==''){
                itemData.splice(i,1);
            }
        }
        _this.setState({itemData : itemData,addState:false})
    }
    deleteItem (index){
        debugger;
        let _this= this;
        let itemData = _this.state.itemData;
        itemData.splice(index,1);
        _this.setState({itemData:itemData})
    }
    render(){
        let _this = this;
        let data = _this.state.itemData;
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
                                <div className="main-con clear">
                                    <div className="circle-style left"></div>
                                    <div className="content-main left">
                                        <div className="main-top-f16">
                                            <span>bjstdmngbgr02.thoughtworks.com</span>
                                            <span style={{display:"inline-block",textIndent:"15px"}}>|idle|192.169.1.2|/var/lib/cruise-agent</span>
                                        </div>
                                        <div className="main-bottom-m10">
                                            <span>+</span>
                                            <span className="span-under" onClick={_this.addItemOp.bind('show',this)}>Specify Resources |</span>
                                            {
                                                data&&data.map((value,index)=>{
                                                    return <span className="output" key={index}>{value}<span className="close" onClick={_this.deleteItem.bind(_this,index)}></span></span>
                                                })
                                            }
                                            {
                                                /*
                                                *  add html
                                                * */
                                                this.state.addState&&
                                                <div className="inner-content">
                                                    <div><span>(separate multiple resources name with commas)</span></div>
                                                    <div className="input-wrap">
                                                        <input ref="addItemValue" className="input-primary" value={this.state.value}/>
                                                    </div>
                                                    <div>
                                                        <button className="btn" onClick={_this.addItem.bind(this)}>Add resources</button>
                                                        <button className="btn" onClick={_this.addItemOp.bind('close',this)}>Close</button>
                                                    </div>
                                                    <div className="triangle"></div>
                                                </div>
                                            }
                                        </div>
                                    </div>
                                    <div className="left">Deny</div>
                                </div>
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