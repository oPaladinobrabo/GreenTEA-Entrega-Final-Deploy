import { Component, useState } from 'react'
import Rotas from './Pages/Rotas';
import Api from './Services/Api';
import './styles.css'


class App extends Component {
state = {destinos : [],}
async componentDidMount(){
  const response = await Api.get('');
  //console.log(response.data)
  this.setState({destinos : response.data})
}

render(){

  const {destinos} = this.state;
  console.log(destinos)
  return (
    <div>
      <Rotas/>
          
    </div>
  )
}

}
  
export default App
