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
    this.state={
      cardIsChecked:false,
      inputIsChecked:this.props.isCheckedValueDafault
    }
    // this.state.chosenCards=[];
  }

  selectCard(e){
    // this.setState({inputIsChecked: e.target.value});
    // console.log(e.target);

    var element=e.target;
    var color=this.props.allProperties.color;
    console.log(color);
    // this.setState({cardIsChecked:true});
    this.props.handleChange(this.props.allProperties);
    // this.state.chosenCards.push(this.props.allProperties);
    // this.setState({ chosenCards: this.state.chosenCards});
    // console.log(this.state.chosenCards);
  }

  render(){
    return <div className="card-wrap">
        <div className="card" id={this.props.elementId} >{this.props.children}</div>
        <input type="checkbox" checked={this.state.inputIsChecked} value={this.state.inputIsChecked} onChange={this.selectCard}/>
    </div>
  }
}

class App extends React.Component{
  constructor(props){
    super(props);
    this.cardsSet=[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    this.getSet=this.getSet.bind(this);
    this.chosenCards=[];
    this.counter=0;
    this.state={
      cardsProps: [{color: "red", shape: "circle", outline: "dashed", number: 1}, {color: "blue", shape: "square", outline: "solid", number: 2},
                {color: "red", shape: "circle", outline: "dashed", number: 1}, {color: "blue", shape: "square", outline: "solid", number: 2},
                {color: "red", shape: "circle", outline: "dashed", number: 1}, {color: "blue", shape: "square", outline: "solid", number: 2},
                {color: "red", shape: "circle", outline: "dashed", number: 1}, {color: "blue", shape: "square", outline: "solid", number: 2},
                {color: "red", shape: "circle", outline: "dashed", number: 1}, {color: "blue", shape: "square", outline: "solid", number: 2},
                {color: "red", shape: "circle", outline: "dashed", number: 1}, {color: "blue", shape: "square", outline: "solid", number: 2}
              ],
      isChecked:false
    }
  }

  getSet(cardObj){
    console.log(cardObj);
    if (this.chosenCards.length<3){
      this.chosenCards.push(cardObj);
    }
    if (this.chosenCards.length==3){
      if (this.chosenCards[0].color==this.chosenCards[1].color && this.chosenCards[0].color==this.chosenCards[2].color){
        alert("you have a set");
      }else{
        alert("this is not a set");
      }
      this.chosenCards=[];
      this.counter=0;
      this.setState({isChecked:false});
    }
    console.log(this.chosenCards);
  }

  render(){
    //a function that would determines the images
    var img=<Img/>
    var self=this;
    return <div className="game-wrap">
          <div className="game-title">Find all sets</div>
          {this.cardsSet.map(function(cardNo, index){
            return <Card key={index} elementId={index} handleChange={self.getSet} allProperties={self.state.cardsProps[index]} isCheckedValueDafault={self.state.isChecked}>{img}</Card>
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
