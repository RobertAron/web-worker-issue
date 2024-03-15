self.onmessage = ({ data: { question } }) => {
  console.log("in web worker");
  self.postMessage({
    answer: 42,
  });
};
