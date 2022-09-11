const squareBody = document.querySelector(".square-body");
const resetBtn = document.querySelector(".btn-reset");
const blocks = squareBody.querySelectorAll(".block");

const getIndex = (number) => {
  let result;
  blocks.forEach((block, index) => {
    const blockNumber = block.querySelector(".block-number").textContent;
    if (blockNumber === number) {
      result = index;
    }
  });
  return result;
};

const move = (direction, number) => {
  try {
    let numberFrom;
    let nubmerTo;
    let temp;
    if (direction.contains("top")) {
      numberFrom = blocks[getIndex(number)].querySelector(".block-number");
      nubmerTo = blocks[getIndex(number) - 5]?.querySelector(".block-number");
      if (nubmerTo) {
        temp = nubmerTo.textContent;
      } else {
        throw new RangeError("Вы вышли за границы поля!");
      }
    } else if (direction.contains("right")) {
      numberFrom = blocks[getIndex(number)].querySelector(".block-number");
      nubmerTo = blocks[getIndex(number) + 1]?.querySelector(".block-number");
      if (nubmerTo) {
        temp = nubmerTo.textContent;
      } else {
        throw new RangeError("Вы вышли за границы поля!");
      }
    } else if (direction.contains("bottom")) {
      numberFrom = blocks[getIndex(number)].querySelector(".block-number");
      nubmerTo = blocks[getIndex(number) + 5]?.querySelector(".block-number");
      if (nubmerTo) {
        temp = nubmerTo.textContent;
      } else {
        throw new RangeError("Вы вышли за границы поля!");
      }
    } else if (direction.contains("left")) {
      numberFrom = blocks[getIndex(number)].querySelector(".block-number");
      nubmerTo = blocks[getIndex(number) - 1]?.querySelector(".block-number");
      if (nubmerTo) {
        temp = nubmerTo.textContent;
      } else {
        throw new RangeError("Вы вышли за границы поля!");
      }
    }
    nubmerTo.textContent = numberFrom.textContent;
    numberFrom.textContent = temp;
  } catch (e) {
    if (e.name === "RangeError") alert(e.message);
  }
};

const reset = () => {
  blocks.forEach((block, index) => {
    block.querySelector(".block-number").textContent = index + 1;
  });
};

squareBody.addEventListener("click", (e) => {
  if (e.target.closest(".arrow")) {
    move(
      e.target.closest(".arrow").classList,
      e.target.closest(".block").querySelector(".block-number").textContent
    );
  }
});
resetBtn.addEventListener("click", reset);
