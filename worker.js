self.onmessage = function (evt) {
  console.log(12, evt);

  const { data, ports } = evt;

  function computeCount(nums) {
    let sum = 0;
    for (let i = 0; i <= nums; i++) {
      sum += i;
    }
    return sum;
  }

  const result = computeCount(data.count);

  ports[0].postMessage({ type: data.type, result: result });
};
