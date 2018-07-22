import React from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader';
import SubScreen from "./SubScreen";

class ScreenManager extends React.Component {
  

  render() {
  return <div> 
    <SubScreen/>
  </div>
  }
}

ReactDOM.render(
  <ScreenManager />,
  document.getElementById('root')
);
export default hot(module)(ScreenManager)