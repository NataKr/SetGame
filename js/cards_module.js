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


Cards.getNumberOfSets=function(cards){
  var cardsToObject={}
  var counter=0;
  for (var i=0; i<cards.length; i++){
    cardsToObject[i]=cards[i];
  }
  console.log(cardsToObject);
  for (var i=0; i<cards.length-2; i++){
    if (cardsToObject[i].color==cardsToObject[i+1].color && cardsToObject[i].shape!=cardsToObject[i+1].shape && cardsToObject[i].outline!=cardsToObject[i+1].outline
      && cardsToObject[i].number.length!=cardsToObject[i+1].number.length){
      for (var j=i+2; j<cards.length; j++){
        if (cardsToObject[i].color==cardsToObject[j].color && cardsToObject[i].shape!=cardsToObject[j].shape && cardsToObject[i+1].shape!=cardsToObject[j].shape
            && cardsToObject[i].outline!=cardsToObject[j].outline && cardsToObject[i+1].outline!=cardsToObject[j].outline
            && cardsToObject[i].number.length!=cardsToObject[j].number.length && cardsToObject[i+1].number.length!=cardsToObject[j].number.length){
          counter++;
          console.log("same color "+ counter);
        }
      }
    }
    if (cardsToObject[i].shape==cardsToObject[i+1].shape && cardsToObject[i].color!=cardsToObject[i+1].color && cardsToObject[i].outline!=cardsToObject[i+1].outline
      && cardsToObject[i].number.length!=cardsToObject[i+1].number.length){
        for (var j=i+2; j<cards.length; j++){
          if (cardsToObject[i].shape==cardsToObject[j].shape && cardsToObject[i].color!=cardsToObject[j].color && cardsToObject[i+1].color!=cardsToObject[j].color
              && cardsToObject[i].outline!=cardsToObject[j].outline && cardsToObject[i+1].outline!=cardsToObject[j].outline
              && cardsToObject[i].number.length!=cardsToObject[j].number.length && cardsToObject[i+1].number.length!=cardsToObject[j].number.length){
            counter++;
            console.log("same shape "+ counter);
          }
        }
      }
      if (cardsToObject[i].outline==cardsToObject[i+1].outline && cardsToObject[i].color!=cardsToObject[i+1].color && cardsToObject[i].shape!=cardsToObject[i+1].shape
        && cardsToObject[i].number.length!=cardsToObject[i+1].number.length){
          for (var j=i+2; j<cards.length; j++){
            if (cardsToObject[i].outline==cardsToObject[j].outline && cardsToObject[i].color!=cardsToObject[j].color && cardsToObject[i+1].color!=cardsToObject[j].color
                && cardsToObject[i].shape!=cardsToObject[j].shape && cardsToObject[i+1].shape!=cardsToObject[j].shape
                && cardsToObject[i].number.length!=cardsToObject[j].number.length && cardsToObject[i+1].number.length!=cardsToObject[j].number.length){
              counter++;
              console.log("same outline "+ counter);
            }
          }
        }
        if (cardsToObject[i].number.length==cardsToObject[i+1].number.length && cardsToObject[i].color!=cardsToObject[i+1].color && cardsToObject[i].shape!=cardsToObject[i+1].shape
          && cardsToObject[i].outline!=cardsToObject[i+1].outline){
            for (var j=i+2; j<cards.length; j++){
              if (cardsToObject[i].number.length==cardsToObject[j].number.length && cardsToObject[i].color!=cardsToObject[j].color && cardsToObject[i+1].color!=cardsToObject[j].color
                  && cardsToObject[i].shape!=cardsToObject[j].shape && cardsToObject[i+1].shape!=cardsToObject[j].shape
                  && cardsToObject[i].outline!=cardsToObject[j].outline && cardsToObject[i+1].outline!=cardsToObject[j].outline){
                counter++;
                console.log("same number "+ counter);
              }
            }
          }
          if (cardsToObject[i].number.length!=cardsToObject[i+1].number.length && cardsToObject[i].color!=cardsToObject[i+1].color && cardsToObject[i].shape!=cardsToObject[i+1].shape
            && cardsToObject[i].outline!=cardsToObject[i+1].outline){
              for (var j=i+2; j<cards.length; j++){
                if (cardsToObject[i].number.length!=cardsToObject[j].number.length && cardsToObject[i+1].number.length!=cardsToObject[j].number.length && cardsToObject[i].color!=cardsToObject[j].color && cardsToObject[i+1].color!=cardsToObject[j].color
                    && cardsToObject[i].shape!=cardsToObject[j].shape && cardsToObject[i+1].shape!=cardsToObject[j].shape
                    && cardsToObject[i].outline!=cardsToObject[j].outline && cardsToObject[i+1].outline!=cardsToObject[j].outline){
                  counter++;
                  console.log("no match "+ counter);
                }
              }
            }
  }
  console.log("total: "+counter);
  return counter;
}
