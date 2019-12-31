import React from 'react';
import ReactDom from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './spinner';


class App extends React.Component{
  constructor(props){
      super(props)
      this.state = {lat: null,errorMessage:''};
      
  }

  componentDidMount(){
    window.navigator.geolocation.getCurrentPosition(
        (position)=>{
            this.setState({lat:position.coords.latitude});
        },
        (err)=>{
            this.setState({errorMessage: err.message})
        }
    );

  }

  renderContent(){
    if (!this.state.errorMessage && this.state.lat) {
        return <SeasonDisplay lat={this.state.lat}/>
    }
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error{this.state.errorMessage} </div>;
  }
  return<div><Spinner message="please accept location request"/></div>
  }

  render() {
    return(
        <div className="border_red">
            {this.renderContent()}
        </div>
    )  
     
}
}
ReactDom.render(<App />,document.querySelector("#root"));
