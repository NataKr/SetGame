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
      // cardSelected:this.props.cardIsSelected
      cardSelected:this.props.selectedCard,
      // cardIsChecked:false,
      // inputIsChecked:this.props.isCheckedValueDafault
    }
    // this.state.chosenCards=[];
  }

  selectCard(e){
    // this.setState({inputIsChecked: e.target.value});
    // console.log(e.target);
    this.setState({cardSelected: true});
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
    var self=this;
    return <div className={"card-wrap "+this.state.cardSelected}>
        <div className="card" id={this.props.elementId} onClick={this.selectCard}>
          {this.props.allProperties.number.map((card, i) => <Img key={'img'+i} config={this.props.allProperties}></Img>)}
        </div>
        {/* <input type="checkbox" checked={this.state.inputIsChecked} value={this.state.inputIsChecked} onChange={this.selectCard}/> */}
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
      hours: 0
    }
  }

  getSet(cardObj){
    console.log(cardObj);
    if (this.chosenCards.length<3){
      this.chosenCards.push(cardObj);
    }
    if (this.chosenCards.length==3){
      var result=Cards.compareCards(this.chosenCards);
      if (result){
        alert("you have a set");
      } else {
        alert("this is not a set");
      }
      // if (this.chosenCards[0].color==this.chosenCards[1].color && this.chosenCards[0].color==this.chosenCards[2].color){
      //   alert("you have a set");
      // }else{
      //   alert("this is not a set");
      // }
      console.log(this.chosenCards);
      this.chosenCards=[];
      // this.counter=0;
    }
    console.log(this.chosenCards);
  }

  resetCardField(){
    var allCards=this.getCardsField();
    console.log(allCards);
    this.setState({cardsProps: allCards});
  }

  // compareCards(chosenCardsArray){
  //   var counter=0;
  //   if ((chosenCardsArray[0].color==chosenCardsArray[1].color && chosenCardsArray[2].color==chosenCardsArray[0].color)||
  //       (chosenCardsArray[0].shape==chosenCardsArray[1].shape && chosenCardsArray[2].shape==chosenCardsArray[0].shape)||
  //       (chosenCardsArray[0].outline==chosenCardsArray[1].outline && chosenCardsArray[2].outline==chosenCardsArray[0].outline)||
  //       (chosenCardsArray[0].number.length==chosenCardsArray[1].number.length && chosenCardsArray[2].number.length==chosenCardsArray[0].number.length)){
  //
  //     if (chosenCardsArray[0].color==chosenCardsArray[1].color && chosenCardsArray[2].color==chosenCardsArray[0].color){
  //       if (chosenCardsArray[0].outline==chosenCardsArray[1].outline || chosenCardsArray[0].outline==chosenCardsArray[2].outline || chosenCardsArray[1].outline==chosenCardsArray[2].outline){
  //         counter++;
  //       }
  //       if (chosenCardsArray[0].shape==chosenCardsArray[1].shape || chosenCardsArray[0].shape==chosenCardsArray[2].shape || chosenCardsArray[1].shape==chosenCardsArray[2].shape){
  //         counter++;
  //       }
  //       if (chosenCardsArray[0].number.length==chosenCardsArray[1].number.length || chosenCardsArray[0].number.length==chosenCardsArray[2].number.length || chosenCardsArray[1].number.length==chosenCardsArray[2].number.length){
  //         counter++;
  //       }
  //       console.log(counter);
  //     }
  //     if (chosenCardsArray[0].shape==chosenCardsArray[1].shape && chosenCardsArray[2].shape==chosenCardsArray[0].shape){
  //       if (chosenCardsArray[0].color==chosenCardsArray[1].color || chosenCardsArray[0].color==chosenCardsArray[2].color || chosenCardsArray[1].color==chosenCardsArray[2].color){
  //         counter++;
  //       }
  //       if (chosenCardsArray[0].outline==chosenCardsArray[1].outline || chosenCardsArray[0].outline==chosenCardsArray[2].outline || chosenCardsArray[1].outline==chosenCardsArray[2].outline){
  //         counter++;
  //       }
  //       if (chosenCardsArray[0].number.length==chosenCardsArray[1].number.length || chosenCardsArray[0].number.length==chosenCardsArray[2].number.length || chosenCardsArray[1].number.length==chosenCardsArray[2].number.length){
  //         counter++;
  //       }
  //       console.log(counter);
  //     }
  //     if (chosenCardsArray[0].outline==chosenCardsArray[1].outline && chosenCardsArray[2].outline==chosenCardsArray[0].outline){
  //       if (chosenCardsArray[0].color==chosenCardsArray[1].color || chosenCardsArray[0].color==chosenCardsArray[2].color || chosenCardsArray[1].color==chosenCardsArray[2].color){
  //         counter++;
  //       }
  //       if (chosenCardsArray[0].shape==chosenCardsArray[1].shape || chosenCardsArray[0].shape==chosenCardsArray[2].shape || chosenCardsArray[1].shape==chosenCardsArray[2].shape){
  //         counter++;
  //       }
  //       if (chosenCardsArray[0].number.length==chosenCardsArray[1].number.length || chosenCardsArray[0].number.length==chosenCardsArray[2].number.length || chosenCardsArray[1].number.length==chosenCardsArray[2].number.length){
  //         counter++;
  //       }
  //       console.log(counter);
  //     }
  //     if (chosenCardsArray[0].number.length==chosenCardsArray[1].number.length && chosenCardsArray[2].number.length==chosenCardsArray[0].number.length){
  //       if (chosenCardsArray[0].color==chosenCardsArray[1].color || chosenCardsArray[0].color==chosenCardsArray[2].color || chosenCardsArray[1].color==chosenCardsArray[2].color){
  //         counter++;
  //       }
  //       if (chosenCardsArray[0].shape==chosenCardsArray[1].shape || chosenCardsArray[0].shape==chosenCardsArray[2].shape || chosenCardsArray[1].shape==chosenCardsArray[2].shape){
  //         counter++;
  //       }
  //       if (chosenCardsArray[0].outline==chosenCardsArray[1].outline || chosenCardsArray[0].outline==chosenCardsArray[2].outline || chosenCardsArray[1].outline==chosenCardsArray[2].outline){
  //         counter++;
  //       }
  //       console.log(counter);
  //     }
  //   }else{
  //     if (chosenCardsArray[0].color==chosenCardsArray[1].color || chosenCardsArray[0].color==chosenCardsArray[2].color || chosenCardsArray[1].color==chosenCardsArray[2].color){
  //       counter++;
  //       console.log(counter);
  //     }
  //     if (chosenCardsArray[0].shape==chosenCardsArray[1].shape || chosenCardsArray[0].shape==chosenCardsArray[2].shape || chosenCardsArray[1].shape==chosenCardsArray[2].shape){
  //       counter++;
  //       console.log(counter);
  //     }
  //     if (chosenCardsArray[0].outline==chosenCardsArray[1].outline || chosenCardsArray[0].outline==chosenCardsArray[2].outline || chosenCardsArray[1].outline==chosenCardsArray[2].outline){
  //       counter++;
  //       console.log(counter);
  //     }
  //     if (chosenCardsArray[0].number.length==chosenCardsArray[1].number.length || chosenCardsArray[0].number.length==chosenCardsArray[2].number.length || chosenCardsArray[1].number.length==chosenCardsArray[2].number.length){
  //       counter++;
  //       console.log(counter);
  //     }
  //     console.log(counter);
  //   }
  //         // counter++;
  //     // console.log(counter);
  //
  //   console.log(counter);
  //   if (counter==0){
  //     return true;
  //   }else{
  //     return false;
  //   }
  // }
  //
  // componentDidMount(){
  //   this.chosenCards
  // }

  getCardsField(){
    var cardsArray=[];
    this.setState({seconds: 0, minutes: 0, hours: 0});
    for(var i=0; i<12; i++){
      var newCard=this.getCard();
      // console.log(newCard);
      if (cardsArray.length==0){
        cardsArray.push(newCard);
      }else{
        while(newCard.shape==cardsArray[i-1].shape && newCard.color==cardsArray[i-1].color && newCard.outline==cardsArray[i-1].outline && newCard.number.length==cardsArray[i-1].number.length){
          newCard=this.getCard();
        }
        cardsArray.push(newCard);
      }
      // console.log(cardsArray);
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
    //a function that would determines the images
    // var img=<Img/>
    var self=this;
    return <div className="game-wrap">
          <div className="game-title">Find all sets</div>
          <div className="timer">{this.state.hours}:{this.state.minutes}:{this.state.seconds}</div>
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
