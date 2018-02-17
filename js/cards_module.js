window.Cards={};

Cards.compareCards=function(chosenCardsArray){
  var counter=0;
  if ((chosenCardsArray[0].color==chosenCardsArray[1].color && chosenCardsArray[2].color==chosenCardsArray[0].color)||
      (chosenCardsArray[0].shape==chosenCardsArray[1].shape && chosenCardsArray[2].shape==chosenCardsArray[0].shape)||
      (chosenCardsArray[0].outline==chosenCardsArray[1].outline && chosenCardsArray[2].outline==chosenCardsArray[0].outline)||
      (chosenCardsArray[0].number.length==chosenCardsArray[1].number.length && chosenCardsArray[2].number.length==chosenCardsArray[0].number.length)){

    if (chosenCardsArray[0].color==chosenCardsArray[1].color && chosenCardsArray[2].color==chosenCardsArray[0].color){
      if (chosenCardsArray[0].outline==chosenCardsArray[1].outline || chosenCardsArray[0].outline==chosenCardsArray[2].outline || chosenCardsArray[1].outline==chosenCardsArray[2].outline){
        counter++;
      }
      if (chosenCardsArray[0].shape==chosenCardsArray[1].shape || chosenCardsArray[0].shape==chosenCardsArray[2].shape || chosenCardsArray[1].shape==chosenCardsArray[2].shape){
        counter++;
      }
      if (chosenCardsArray[0].number.length==chosenCardsArray[1].number.length || chosenCardsArray[0].number.length==chosenCardsArray[2].number.length || chosenCardsArray[1].number.length==chosenCardsArray[2].number.length){
        counter++;
      }
      console.log(counter);
    }
    if (chosenCardsArray[0].shape==chosenCardsArray[1].shape && chosenCardsArray[2].shape==chosenCardsArray[0].shape){
      if (chosenCardsArray[0].color==chosenCardsArray[1].color || chosenCardsArray[0].color==chosenCardsArray[2].color || chosenCardsArray[1].color==chosenCardsArray[2].color){
        counter++;
      }
      if (chosenCardsArray[0].outline==chosenCardsArray[1].outline || chosenCardsArray[0].outline==chosenCardsArray[2].outline || chosenCardsArray[1].outline==chosenCardsArray[2].outline){
        counter++;
      }
      if (chosenCardsArray[0].number.length==chosenCardsArray[1].number.length || chosenCardsArray[0].number.length==chosenCardsArray[2].number.length || chosenCardsArray[1].number.length==chosenCardsArray[2].number.length){
        counter++;
      }
      console.log(counter);
    }
    if (chosenCardsArray[0].outline==chosenCardsArray[1].outline && chosenCardsArray[2].outline==chosenCardsArray[0].outline){
      if (chosenCardsArray[0].color==chosenCardsArray[1].color || chosenCardsArray[0].color==chosenCardsArray[2].color || chosenCardsArray[1].color==chosenCardsArray[2].color){
        counter++;
      }
      if (chosenCardsArray[0].shape==chosenCardsArray[1].shape || chosenCardsArray[0].shape==chosenCardsArray[2].shape || chosenCardsArray[1].shape==chosenCardsArray[2].shape){
        counter++;
      }
      if (chosenCardsArray[0].number.length==chosenCardsArray[1].number.length || chosenCardsArray[0].number.length==chosenCardsArray[2].number.length || chosenCardsArray[1].number.length==chosenCardsArray[2].number.length){
        counter++;
      }
      console.log(counter);
    }
    if (chosenCardsArray[0].number.length==chosenCardsArray[1].number.length && chosenCardsArray[2].number.length==chosenCardsArray[0].number.length){
      if (chosenCardsArray[0].color==chosenCardsArray[1].color || chosenCardsArray[0].color==chosenCardsArray[2].color || chosenCardsArray[1].color==chosenCardsArray[2].color){
        counter++;
      }
      if (chosenCardsArray[0].shape==chosenCardsArray[1].shape || chosenCardsArray[0].shape==chosenCardsArray[2].shape || chosenCardsArray[1].shape==chosenCardsArray[2].shape){
        counter++;
      }
      if (chosenCardsArray[0].outline==chosenCardsArray[1].outline || chosenCardsArray[0].outline==chosenCardsArray[2].outline || chosenCardsArray[1].outline==chosenCardsArray[2].outline){
        counter++;
      }
      console.log(counter);
    }
  }else{
    if (chosenCardsArray[0].color==chosenCardsArray[1].color || chosenCardsArray[0].color==chosenCardsArray[2].color || chosenCardsArray[1].color==chosenCardsArray[2].color){
      counter++;
      console.log(counter);
    }
    if (chosenCardsArray[0].shape==chosenCardsArray[1].shape || chosenCardsArray[0].shape==chosenCardsArray[2].shape || chosenCardsArray[1].shape==chosenCardsArray[2].shape){
      counter++;
      console.log(counter);
    }
    if (chosenCardsArray[0].outline==chosenCardsArray[1].outline || chosenCardsArray[0].outline==chosenCardsArray[2].outline || chosenCardsArray[1].outline==chosenCardsArray[2].outline){
      counter++;
      console.log(counter);
    }
    if (chosenCardsArray[0].number.length==chosenCardsArray[1].number.length || chosenCardsArray[0].number.length==chosenCardsArray[2].number.length || chosenCardsArray[1].number.length==chosenCardsArray[2].number.length){
      counter++;
      console.log(counter);
    }
    console.log(counter);
  }
        // counter++;
    // console.log(counter);

  console.log(counter);
  if (counter==0){
    return true;
  }else{
    return false;
  }
}
