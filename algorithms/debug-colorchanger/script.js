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

  console.log(getRandomIndex())
  
  const body = document.queryselector("body");
  const bgHexCodeSpanElement = document.querySelector("bg-hex-code");
  console.log(bgHexCodeSpanElement)
  
  function changeBackgroundColor() {
    const color = darkColorsArr[getRandomIndex];
  
    bgHexCodeSpanElement.innerText = color;
    body.style.backgroundColor = color;
  }
  const btn = document.querySelector("#click-btn");
  console.log(btn)
  
  btn.addEventListener("click", changeBackgroundColor());
