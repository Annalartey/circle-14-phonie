function startApp() {
  // Your entire app should not necessarily be coded inside this 
  // single function (though there's no penalty for that), 
  // so create and use/call additional functions from here

  // pls remove the below and make some magic in here!
  const input = document.querySelector(".inputBox")

  input.addEventListener("input", function(e) {
    e.preventDefault();

    checkInput(input.value);
  })
}



function checkInput(value) {
  //variable to store what the user types into the input
  let inputVal = value
  
  const telecom = document.querySelector(".telecom")

  //variable to store the prefix number codes for Ghana
  let numberWithoutCode = inputVal.substring(1, 3)
  let numberWithCode = inputVal.substring(4, 6)

  //variable to store the prefix number codes for Nigeria
  let numberWithoutCodeForNg = inputVal.substring(1, 4)
  let numberWithCodeForNg = inputVal.substring(4, 7)



  // checking numbers starting with 0 ***Ghana

  if (inputVal.substring(0, 1) == "0") {
    if (inputVal.length == 3 || inputVal.length > 3 ) {
      if (numberWithoutCode == "24" || numberWithoutCode == "54" || numberWithoutCode == "55" || numberWithoutCode == "59") {
        telecom.style.backgroundImage = "url(./logo/mtn.png)"
        telecom.style.display = 'block';
      } else if (numberWithoutCode == "50" || numberWithoutCode == "20") {
        telecom.style.backgroundImage = "url(./logo/voda.png)"
        telecom.style.display = "block"
      } else if (numberWithoutCode == "26" || numberWithoutCode == "27") {
        telecom.style.backgroundImage = "url(./logo/airtel.png)"
        telecom.style.display = "block"
      } else if (numberWithoutCode == "23") {
        telecom.style.backgroundImage = "url(./logo/glo.png)"
        telecom.style.display = "block"
      } else if (numberWithoutCode == "") {
        telecom.style.display = "none"
      } else if (numberWithCode > 10){
        telecom.style.display = "none"
      } else {
      telecom.style.display = "none"
      }
    }

  }

  //checking numbers starting with country code ***Ghana

  if (inputVal.substring(0, 1) == "+") {
    if (inputVal.length == 6 || inputVal.length > 6) {
      if (numberWithCode == "24" || numberWithCode == "54" || numberWithCode == "55" || numberWithCode == "59") {
        telecom.style.backgroundImage = "url(./logo/mtn.png)"
        telecom.style.display = 'block';
      } else if (numberWithCode == "50" || numberWithCode == "20") {
        telecom.style.backgroundImage = "url(./logo/voda.png)"
        telecom.style.display = "block"
      } else if (numberWithCode == "26" || numberWithCode == "27") {
        telecom.style.backgroundImage = "url(./logo/airtel.png)"
        telecom.style.display = "block"
      } else if (numberWithCode == "23") {
        telecom.style.backgroundImage = "url(./logo/glo.png)"
        telecom.style.display = "block"
      }
      else if (numberWithCode == "") {
        telecom.style.display = "none"
      }

    } else {
      telecom.style.display = "none"
    }

  }


  //checking number without country code or number starting with 0 ***Nigeria

  if (inputVal.substring(0, 1) == "0") {
    if (inputVal.length == 4 || inputVal.length > 4) {
      if (numberWithoutCodeForNg == "803" || numberWithoutCodeForNg == "806" || numberWithoutCodeForNg == "703" || numberWithoutCodeForNg == "706" || numberWithoutCodeForNg == "813" || numberWithoutCodeForNg == "816" || numberWithoutCodeForNg == "810" || numberWithoutCodeForNg == "814" || numberWithoutCodeForNg == "903" || numberWithoutCodeForNg == "906") {
        telecom.style.backgroundImage = "url(./logo/mtn.png)"
        telecom.style.display = 'block';
      } else if (numberWithoutCodeForNg == "809" || numberWithoutCodeForNg == "818" || numberWithoutCodeForNg == "817" || numberWithoutCodeForNg == "908" || numberWithoutCodeForNg == "909") {
        telecom.style.backgroundImage = "url(./logo/etisalat.png)"
        telecom.style.display = "block"
      } else if (numberWithoutCodeForNg == "802" || numberWithoutCodeForNg == "808" || numberWithoutCodeForNg == "708" || numberWithoutCodeForNg == "812" || numberWithoutCodeForNg == "701" || numberWithoutCodeForNg == "902" || numberWithoutCodeForNg == "907" || numberWithoutCodeForNg == "901") {
        telecom.style.backgroundImage = "url(./logo/airtel.png)"
        telecom.style.display = "block"
      } else if (numberWithoutCodeForNg == "805" || numberWithoutCodeForNg == "807" || numberWithoutCodeForNg == "705" || numberWithoutCodeForNg == "815" || numberWithoutCodeForNg == "811" || numberWithoutCodeForNg == "905") {
        telecom.style.backgroundImage = "url(./logo/glo.png)"
        telecom.style.display = "block"
      }
      else if (numberWithoutCodeForNg == "") {
        telecom.style.display = "none"
      }
    } else {
      telecom.style.display = "none"
    }

  }



  //checking number with country code *** Nigeria

  if (inputVal.substring(0, 1) == "+") {
    if (inputVal.length == 7 || inputVal.length > 7) {
      if (numberWithCodeForNg == "803" || numberWithCodeForNg == "806" || numberWithCodeForNg == "703" || numberWithCodeForNg == "706" || numberWithCodeForNg == "813" || numberWithCodeForNg == "816" || numberWithCodeForNg == "810" || numberWithCodeForNg == "814" || numberWithCodeForNg == "903" || numberWithCodeForNg == "906") {
        telecom.style.backgroundImage = "url(./logo/mtn.png)"
        telecom.style.display = 'block';
      } else if (numberWithCodeForNg == "809" || numberWithCodeForNg == "818" || numberWithCodeForNg == "817" || numberWithCodeForNg == "908" || numberWithCodeForNg == "909") {
        telecom.style.backgroundImage = "url(./logo/etisalat.png)"
        telecom.style.display = "block"
      } else if (numberWithCodeForNg == "802" || numberWithCodeForNg == "808" || numberWithCodeForNg == "708" || numberWithCodeForNg == "812" || numberWithCodeForNg == "701" || numberWithCodeForNg == "902" || numberWithCodeForNg == "907" || numberWithCodeForNg == "901") {
        telecom.style.backgroundImage = "url(./logo/airtel.png)"
        telecom.style.display = "block"
      } else if (numberWithCodeForNg == "805" || numberWithCodeForNg == "807" || numberWithCodeForNg == "705" || numberWithCodeForNg == "815" || numberWithCodeForNg == "811" || numberWithCodeForNg == "905") {
        telecom.style.backgroundImage = "url(./logo/glo.png)"
        telecom.style.display = "block"
      }
      else if (numberWithCodeForNg == "") {
        telecom.style.display = "none"
      }
    } else {
      telecom.style.display = "none"
    }

  }

 

}


// ======= DO NOT EDIT ============== //
export default startApp;
  // ======= EEND DO NOT EDIT ========= //console.log('make magic in here!');