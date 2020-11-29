import './App.css';
import React from 'react'
export default

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     characters:[]
  }

}
async componentDidMount() {

  this.starwarspeople();
}

async starwarspeople(){
  const resp = await fetch("https://swapi.dev/api/people/");
  const parsedResp = await resp.json();
  this.setState({
    characters: parsedResp.results || []
  })
  console.log(parsedResp.results);
}



StarWarsCharacter = () =>{
return this.state.characters.map(name => {
  return(
    <tr key ={name.name}>
      <td>{name.name}</td>
      </tr>
  )
})
}


render() {
  const {characters} = this.state


  return (
    <div>
    <table>
      <thead>
        <tr>
        <td> Name </td>
        </tr>
      </thead>
      <tbody>
        {this.StarWarsCharacter()}
      </tbody>
    </table>
  </div>
  );
  }





}
