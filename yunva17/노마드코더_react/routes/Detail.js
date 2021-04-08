import React from "react";

// 수동으로 detail 주소를 적으면 home으로 이동
class Detail extends React.Component{
    componentDidMount(){
        const {location, history} = this.props;
        if(location.state == undefined){
            history.push("/");
        }
    }
    render(){
        const{location} = this.props;
        if(location.state){
            return <span>{location.state.title}</span>
        }
        else{
            return null;
        }
    }
        
}

export default Detail;