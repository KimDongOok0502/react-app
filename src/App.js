import React from 'react';
import './App.css';
import ClockTitle from './ClockTitle';

class WorldClock extends React.Component{
  
  constructor(props) {
    super(props)
    this.state = {
      hour : this.props.time,
      minute : 0
    }
    setInterval(()=> {
      this.setState((state)=>(
        state.minute === 59 ?
        {hour : state.hour + 1, minute : 0}:
        {minute:this.state.minute+1}
      ))
      this.setState((state)=>(
        state.hour === 23 && state.minute === 59?
        {hour : 0, minute : 0} :{}

      ))
    },10)
  }
    render(){
      return(
          <div className = {'WorldClock'}>
            <h2>
                도시: {this.props.city}
            </h2>
            <p>시간 : {this.state.hour}시 {this.state.minute}분</p>
          </div>

    )
    }
}

function App() {
  const CityTimeData = [
    ['서울',10],
    ['베이징',9],
    ['시드니',12],
    ['LA',17],
    ['부산',10]
  ]
  // 라이브러리 사용하면서 arrow function ES6 사용 
  const WorldClockList = CityTimeData.map((citytime, index)=> // 매개인자를 넣어야한다.
    <WorldClock city = {citytime[0]} time = {citytime[1]} key = {index}/>
  )
  return (
    <div className="App">
      <br/>
      <ClockTitle name = "이동욱"/>
      {WorldClockList}
      
     
    </div>
  );
}

export default App;
