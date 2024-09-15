const decimalInput = document.getElementById("decimal-input");
const decimalConvertBtn = document.getElementById("decimal-convert-btn");
const binaryResult = document.getElementById("binary-result");

const binaryInput = document.getElementById("binary-input");
const binaryConvertBtn = document.getElementById("binary-convert-btn");
const decimalResult = document.getElementById("decimal-result");

const animationContainer = document.getElementById("animation-container");

const animationData = [
  {
    inputVal: 5,
    marginTop: 300,
    addElDelay: 1000,
    msg: "decimalToBinary(5) returns '10' + 1 (5 % 2). Then it pops off the stack.",
    showMsgDelay: 15000,
    removeElDelay: 20000,
  },
  {
    inputVal: 2,
    marginTop: -200,
    addElDelay: 1500,
    msg: "decimalToBinary(2) returns '1' + 0 (2 % 2) and gives that value to the stack below. Then it pops off the stack.",
    showMsgDelay: 10000,
    removeElDelay: 15000,
  },
  {
    inputVal: 1,
    marginTop: -200,
    addElDelay: 2000,
    msg: "decimalToBinary(1) returns '1' (base case) and gives that value to the stack below. Then it pops off the stack.",
    showMsgDelay: 5000,
    removeElDelay: 10000,
  },
];

const decimalToBinary = (input) => {
  if (input === 0 || input === 1) {
    return String(input); // base case
  } else {
    return decimalToBinary(Math.floor(input / 2)) + (input % 2);
    // recursive function, call decimalToBinary function until the input reach 1 or 0
  }
};

const showAnimation = () => {
  binaryResult.innerText = "Call Stack Animation";

  animationData.forEach((obj) => {
    setTimeout(() => {}, obj.addElDelay);

    animationContainer.innerHTML += `<p id="${obj.inputVal}" style="margin-top: ${obj.marginTop}px" class="animation-frame">decimalToBinary(${obj.inputVal})</p>`;

    setTimeout(() => {
      document.getElementById(obj.inputVal).textContent = obj.msg;
    }, obj.showMsgDelay);

    setTimeout(() => {
      document.getElementById(obj.inputVal).remove();
    }, obj.removeElDelay);
  });

  setTimeout(() => {
    binaryResult.textContent = decimalToBinary(5);
  }, 20000);
};

const checkDecimalInput = () => {
  const inputInt = parseInt(decimalInput.value);

  if (!decimalInput.value || isNaN(inputInt) || inputInt < 0) {
    alert("Please provide a decimal number greater than or equal to 0");
    return;
  }

  if (inputInt === 5) {
    showAnimation();
    return;
  }

  binaryResult.textContent = decimalToBinary(inputInt);
  decimalInput.value = "";
};

decimalConvertBtn.addEventListener("click", checkDecimalInput);
decimalInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    checkDecimalInput();
  }
});

/* ------- Binary to Decimal ------- */
const binaryToDecimal = (input) => {
  const stringNumber = String(input);
  const array = stringNumber.split("");
  const arrayNumber = array.map(Number);
  const length = arrayNumber.length;

  let result = 0;
  let powerIndex = length - 1;

  for (let i = 0; i < length; i++) {
    result += arrayNumber[i] * 2 ** powerIndex;
    powerIndex--;
  }

  decimalResult.textContent = result;
};

const checkBinaryInput = () => {
  const stringNumber = String(binaryInput.value);

  if (stringNumber[0] !== "1") {
    decimalResult.textContent = "Please provide a binary number start with 1";
  } else {
    binaryToDecimal(binaryInput.value);
    binaryInput.value = "";
  }
};

binaryConvertBtn.addEventListener("click", checkBinaryInput);
binaryInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    checkBinaryInput();
  }
});
