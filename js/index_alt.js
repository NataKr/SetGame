class Img extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return <div>Hi</div>
  }
}

class Cards extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return(<div>
        {this.props.cards.map((cardNo, index)=> <div className="card-wrap"><div className="card" key={index} elementId={cardNo}><Img/></div><input type="checkbox"/></div>)}
      </div>
      )
    }
}

class App extends React.Component{
  constructor(props){
    super(props);
    this.cardsSet=[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
  }

  componentDidMount(){
    console.log(this.cardsSet);
  }

  render(){
    //a function that would determines the images
    // var img=<Img/>
    return <div className="game-wrap">
          <div className="game-title">Find all sets</div>
          <Cards cards={this.cardsSet}/>
          </div>
  }
}

function render() {
    ReactDOM.render(
        <App/>,
        document.getElementById("root")
    );
}

render();
