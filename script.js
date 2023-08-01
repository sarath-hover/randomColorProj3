const getColor = () => {
  // ===== hex code ganerating code =====
  const randomNumber = Math.floor(Math.random() * 16777215);
  //   console.log(randomNumber);
  const randomCode = "#" + randomNumber.toString(16);
  //   console.log(randomNumber, randomCode);
  document.body.style.backgroundColor = randomCode;
  document.getElementById("color-code").innerText = randomCode;
  navigator.clipboard.writeText(randomCode);
};

//  click event (event call)

document.getElementById("btn").addEventListener("click", getColor);
// another click event method

// const btn = document.getElementById("btn");
// btn.addEventListener("click", function () {
//   getColor();
// });

// === initial call ===

getColor();
