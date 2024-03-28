// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
    //returns the number of blocks given a value
    if (someValue<42) {
        return 42-someValue;
    }
    return someValue-42;
  }

  function distanceFromHqInFeet(someValue) {
   return distanceFromHqInBlocks(someValue)*264;
    // call the distanceFromHqInBlocks function from inside the distanceFromHqInFeet function,
    // passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks
  
    // the return value of distanceFromHqInBlocks can then be used to calculate feet
  }

  function distanceTravelledInFeet(start, destination) {
    //returns the number of feet traveled

    return  Math.abs(destination-start)*264;
  }

  function calculatesFarePrice(start, destination) {
    //returns the fare for the customer
    let dist = distanceTravelledInFeet(start,destination);
    if (dist<=400) {
        return 0;
    } else if(dist>=400 && dist<=2000){
        return (dist-400)*0.02;
    } else if(dist>2000 && dist<2500){
        return 25;
    } else if(dist>2500)
    return "cannot travel that far";
  }