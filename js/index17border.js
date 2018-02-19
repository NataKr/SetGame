class Img extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return <div className={"image "+this.props.config.color+" "+this.props.config.shape+" "+this.props.config.outline}></div>
  }
}

class Card extends React.Component {
  constructor(props){
    super(props);
    this.selectCard=this.selectCard.bind(this);
    this.state={
      cardSelected:this.props.selectedCard,
    }
  }

  selectCard(e){

    this.setState({cardSelected: true});
    // var element=e.target;
    // var color=this.props.allProperties.color;
    // console.log(color);
    //
    // this.props.handleChange(this.props.allProperties);
    var element=this;
    console.log(element);
    // this.props.handleChange(this.props.allProperties);

    var object_to_pass=this.props.allProperties;
    object_to_pass["id"]=this.props.elementId;
    document.getElementById(this.props.elementId).classList.add("true");
    this.props.handleChange(object_to_pass);

  }

  render(){
    var self=this;
    return <div className={"card-wrap "+this.state.cardSelected}>
        <div className="card" id={this.props.elementId} onClick={this.selectCard}>
          {this.props.allProperties.number.map((card, i) => <Img key={'img'+i} config={this.props.allProperties}></Img>)}
        </div>

    </div>
  }
}

class App extends React.Component{
  constructor(props){
    super(props);
    this.cardsSet=[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    this.getSet=this.getSet.bind(this);
    this.resetCardField=this.resetCardField.bind(this);
    this.updateTime=this.updateTime.bind(this);
    this.chosenCards=[];
    // this.counter=0;
    this.state={
      cardsProps: [{color: "red", shape: "circle", outline: "dashed", number: [0,1]}, {color: "blue", shape: "square", outline: "solid", number: [0]},
                {color: "green", shape: "circle", outline: "dotted", number: [0]}, {color: "green", shape: "oval", outline: "solid", number: [0]},
                {color: "blue", shape: "oval", outline: "dashed", number: [0,1,2]}, {color: "green", shape: "square", outline: "solid", number: [0,1]},
                {color: "red", shape: "circle", outline: "dotted", number: [0,1,2]}, {color: "blue", shape: "oval", outline: "dashed", number: [0]},
                {color: "green", shape: "square", outline: "dashed", number: [0,1]}, {color: "red", shape: "square", outline: "solid", number: [0]},
                {color: "blue", shape: "oval", outline: "dotted", number: [0,1]}, {color: "red", shape: "oval", outline: "dashed", number: [0]}
              ],
      selected: false,
      minutes: 0,
      seconds:0,
      hours: 0,
      setsFound:0,
      setsAvaialable: ""
    }
  }

  getSet(cardObj){
    console.log(cardObj);
    if (this.chosenCards.length<3){
      var flag=true;
      for (var i=0; i<this.chosenCards.length; i++){
        if (this.chosenCards[i].id==cardObj.id){
          flag=false;
          alert("this card has been selected already");
          break;
        }
      }
      if (flag){
        this.chosenCards.push(cardObj);
      }
    }
    if (this.chosenCards.length==3){
      var result=Cards.compareCards(this.chosenCards);
      if (result){
        this.setState({setsFound:this.state.setsFound+1});
        alert("you have a set");
      } else {
        alert("this is NOT a set");
      }
      console.log(this.chosenCards);
      this.chosenCards=[];
    }
    console.log(this.chosenCards);
  }

  resetCardField(){
    var allCards=this.getCardsField();
    console.log(allCards);
    var totalSets=Cards.getNumberOfSets(allCards);
    this.setState({cardsProps: allCards, setsAvaialable: totalSets});
  }

  getCardsField(){
    var cardsArray=[];
    this.setState({seconds: 0, minutes: 0, hours: 0});
    for(var i=0; i<12; i++){
      var newCard=this.getCard();

      if (cardsArray.length==0){
        cardsArray.push(newCard);
      }else{
        for (var j=0; j<cardsArray.length; j++){
          while(newCard.shape==cardsArray[j].shape && newCard.color==cardsArray[j].color && newCard.outline==cardsArray[j].outline && newCard.number.length==cardsArray[j].number.length){
            newCard=this.getCard();
          }
        }
        cardsArray.push(newCard);
      }

    }
    return cardsArray;
  }

  getCard(){
    var newCard={};
    var shapes=["circle", "square", "oval"];
    var colors=["red", "green", "blue"];
    var outlines=["solid", "dashed", "dotted"];
    var rndShape=Math.floor(Math.random()*3);
    var rndColor=Math.floor(Math.random()*3);
    var rndOutline=Math.floor(Math.random()*3);
    var rndNumber=Math.floor(Math.random()*3);
    var quantity=[];
    for (var i=0; i<=rndNumber; i++){
        quantity.push(i);
    }
    newCard={shape: shapes[rndShape], color: colors[rndColor], outline: outlines[rndOutline], number: quantity};
    return newCard;
  }

  componentDidMount(){ //component mounts only once - i.e. the tree is built
    this.interval=setInterval(this.updateTime, 1000); //initializing a variable as a property
  }

  updateTime(){
    var s=this.state.seconds+1;
    var m=this.state.minutes;
    if (s<60){
      this.setState({seconds:s});
    }
    else if (s==60){
      if (this.state.minutes<60){
        this.setState({seconds:0, minutes: this.state.minutes+1});
      }
      else if (this.state.minutes==60){
        this.setState({seconds: 0, minutes: 0, hours: this.state.hours+1});
      }
    }
  }

  render(){

    var self=this;
    return <div className="game-wrap">
          <div className="game-title">Find all sets</div>
          <div className="timer">{this.state.hours}:{this.state.minutes}:{this.state.seconds}</div>
          <div id="sets-found">Sets: {this.state.setsFound} of {this.state.setsAvaialable}</div>
          <button id="reset-btn" onClick={this.resetCardField}>Reset</button>
          <div className="all-cards-field">
          {this.cardsSet.map(function(cardNo, index){
            return <Card key={index} elementId={index} selectedCard={self.state.selected} handleChange={self.getSet} allProperties={self.state.cardsProps[index]}></Card>
            }
          )}
          </div>
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
