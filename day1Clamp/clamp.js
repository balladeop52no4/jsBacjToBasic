console.log(clamp(9,11,90));

  function clamp(number1, number2, number3) {

    let arr = [];
    arr.push(number1);
    arr.push(number2);
    arr.push(number3);

    arr.sort();
    console.log(arr)
    return arr[1];


    // min_val, mid_val, max_val = sorted([number1,number2,number3]);

    // return mid_val;
    
  }
