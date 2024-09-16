const decimalInput = document.getElementById("decimal-input");
const decimalConvertBtn = document.getElementById("decimal-convert-btn");
const decimalClearBtn = document.getElementById("decimal-clear-btn");
const binaryResult = document.getElementById("binary-result");

const binaryInput = document.getElementById("binary-input");
const binaryConvertBtn = document.getElementById("binary-convert-btn");
const binaryClearBtn = document.getElementById("binary-clear-btn");
const decimalResult = document.getElementById("decimal-result");

/* ------- Decimal to Binary ------- */
const decimalToBinary = (input) => {
  if (input === 0 || input === 1) {
    return String(input); // base case
  } else {
    return decimalToBinary(Math.floor(input / 2)) + (input % 2);
    // recursive function, call decimalToBinary function until the input reach 1 or 0
  }
};

const checkDecimalInput = () => {
  const inputInt = parseInt(decimalInput.value);

  if (!decimalInput.value || isNaN(inputInt) || inputInt < 0) {
    alert("Please provide a decimal number greater than or equal to 0");
    return;
  }

  binaryResult.textContent = decimalToBinary(inputInt);
};

decimalConvertBtn.addEventListener("click", checkDecimalInput);
decimalInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    checkDecimalInput();
  }
});

decimalClearBtn.addEventListener("click", () => {
  decimalInput.value = "";
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
  const array = stringNumber.split("");
  const nonBinaryElements = array.filter((num) => num !== "1" && num !== "0");
  const nonBinaryNumber = Number(nonBinaryElements.join(""));

  if (stringNumber[0] !== "1") {
    decimalResult.textContent = "Please provide a binary number start with 1";
  } else if (nonBinaryNumber) {
    decimalResult.textContent = "Please provide a binary number (only contains 1 and 0)";
  } else {
    binaryToDecimal(binaryInput.value);
  }
};

binaryConvertBtn.addEventListener("click", checkBinaryInput);
binaryInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    checkBinaryInput();
  }
});

binaryClearBtn.addEventListener("click", () => {
  binaryInput.value = "";
});
