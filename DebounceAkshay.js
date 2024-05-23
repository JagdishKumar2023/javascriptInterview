let count = 0;

const getData = () => {
  console.log("Fetching Data..", count++);
};

// Debounce function

const Debounce = function (fn, d) {
  let timer;
  return function () {
    let context = this,
      args = arguments;
    clearTimeout(timer);

    timer = setTimeout(() => {
      fn.apply(context, args);
    }, d);
  };
};

const betterFunction = Debounce(getData, 300);
