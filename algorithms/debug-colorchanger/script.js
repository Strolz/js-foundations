const darkColorsArr = [
    "#2C3E50",
    "#34495E",
    "#2C2C2C",
    "#616A6B",
    "#4A235A", // You should fix the syntax errors in the darkColorsArr array.
    "#2F4F4F",
    "#0E4B5A",
    "#36454F",
    "#2C3E50",
    "#800020",
  ];
  
  function getRandomIndex() {
    // You should fix the ReferenceError thrown when the math object is referenced inside the getRandomIndex function
    // You should round down randomIndex to the nearest whole number.
    const randomIndex = Math.floor(Math.random() * darkColorsArr.length);

    return randomIndex;
  }

  // You should update the value of the body variable to use the correct method name and fix the related TypeError.
  const body = document.querySelector("body");

  // You should fix bgHexCodeSpanElement so that it correctly selects the element with the id of bg-hex-code.
  const bgHexCodeSpanElement = document.getElementById("bg-hex-code");
  console.log(bgHexCodeSpanElement)
  
  // You should modify the color variable inside changeBackgroundColor so that it is set to a random color from the darkColorsArr array.
  function changeBackgroundColor() {
    const color = darkColorsArr[getRandomIndex()];
  
    bgHexCodeSpanElement.innerText = color;
    body.style.backgroundColor = color;
  }

  // You should update the btn variable so that it targets the button element. Open up the index.html to see the correct id name for that button element.
  const btn = document.querySelector(".btn");

  // You should fix the line that adds an event listener for the click event to btn by passing a reference to the changeBackgroundColor function to the method.
  btn.addEventListener("click", changeBackgroundColor);
