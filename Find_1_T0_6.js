

function find_number(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }


  console.log(find_number(1,8));