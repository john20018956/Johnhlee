//inspired by: https://dev.to/ljcdev/simple-typing-effect-pure-js-4p5m

var typeText = document.querySelector(".coding")
var textToBeTypedArr = ["C++", "Java", "MATLAB", "CSS", "HTML"]
var index = 0, isAdding = true, textToBeTypedIndex = 0

function playAnim() {
  setTimeout(function () {
    // set the text of typeText to a substring of the text to be typed using index.
    typeText.innerText = textToBeTypedArr[textToBeTypedIndex].slice(0, index)
    if (isAdding) {
      // adding text
      if (index > textToBeTypedArr[textToBeTypedIndex].length) {
        // no more text to add
        isAdding = false
        //break: wait 2s before playing again
        setTimeout(function () {
          playAnim()
        }, 2000)
        return
      } else {
        // increment index by 1
        index++
      }
    } else {
      // removing text
      if (index === 0) {
        // no more text to remove
        isAdding = true
        //switch to next text in text array
        textToBeTypedIndex = (textToBeTypedIndex + 1) % textToBeTypedArr.length
      } else {
        // decrement index by 1
        index--
      }
    }
    // call itself
    playAnim()
  }, isAdding ? 120 : 60)
}
// start animation
playAnim()





//inspired by: DEV ED

// const texts = ['C++', 'Java', 'MATLAB', 'CSS', 'HTML'];
// let count = 0;
// let index = 0;
// let currentText = '';
// let letter = '';

// (function type() {
//     if (count === texts.length) {
//         count = 0;
//     }
//     currentText = texts[count];
//     letter = currentText.slice(0, ++index);

//     document.querySelector('.coding').textContent = letter;    
//     if(letter.length ===currentText.length) {
//         count++;
//         index = 0;
//     }
//     setTimeout(type, 400);
// }());