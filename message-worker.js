const worker = new Worker("worker.js");

const channel = new MessageChannel();

worker.postMessage({ type: "connect-worker", count: 100 }, [channel.port2]);

channel.port1.onmessage = function (evt) {
  console.log("外部", evt.data);
};
