import React from 'react'

class ClockTitle extends React.Component{

    render(){
        return (
            <div>
                <b>{this.props.name}</b> 의 시계만들기.
            </div> 
            
        )
    }

}

export default ClockTitle;