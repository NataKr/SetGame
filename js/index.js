class Img extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return <div>Hi</div>
  }
}

class Card extends React.Component {
  constructor(props){
    super(props);
    this.selectCard=this.selectCard.bind(this);
    // this.state={
    //   chosenCards:[]
    // }
    // this.state.chosenCards=[];
  }

  selectCard(e){
    var element=e.target;
    var color=this.props.allProperties.color;
    console.log(color);
    // this.state.chosenCards.push(this.props.allProperties);
    // this.setState({ chosenCards: this.state.chosenCards});
    // console.log(this.state.chosenCards);
  }

  render(){
    return <div className="card-wrap">
        <div className="card" id={this.props.elementId} onClick={this.selectCard}>{this.props.children}</div>
        <input type="checkbox"/>
    </div>
  }
}

class App extends React.Component{
  constructor(props){
    super(props);
    this.cardsSet=[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
    this.state={
      cardsProps: [{color: "red", shape: "circle", outline: "dashed", number: 1}, {color: "blue", shape: "square", outline: "solid", number: 2},
                {color: "red", shape: "circle", outline: "dashed", number: 1}, {color: "blue", shape: "square", outline: "solid", number: 2},
                {color: "red", shape: "circle", outline: "dashed", number: 1}, {color: "blue", shape: "square", outline: "solid", number: 2},
                {color: "red", shape: "circle", outline: "dashed", number: 1}, {color: "blue", shape: "square", outline: "solid", number: 2},
                {color: "red", shape: "circle", outline: "dashed", number: 1}, {color: "blue", shape: "square", outline: "solid", number: 2},
                {color: "red", shape: "circle", outline: "dashed", number: 1}, {color: "blue", shape: "square", outline: "solid", number: 2}
              ]}
  }
  render(){
    //a function that would determines the images
    var img=<Img/>
    var self=this;
    return <div className="game-wrap">
          <div className="game-title">Find all sets</div>
          {this.cardsSet.map(function(cardNo, index){
            return <Card key={index} elementId={index} allProperties={self.state.cardsProps[index]}>{img}</Card>
            }
          )}
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
