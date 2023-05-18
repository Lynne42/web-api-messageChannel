window.addEventListener("load", () => {
  const iframe1 = document.getElementById("iframe1");
  const iframe2 = document.getElementById("iframe2");

  const channel1 = new MessageChannel();
  const channel2 = new MessageChannel();

  // 监听 channel1.port1 接收到的信息

  const channel1Port1Onmessage = (event) => {
    console.log("channel1.port1 onmessage: ", event.data);

    // channel2.port2.postMessage({
    //   channel: "channel2",
    //   message: "channel2 转发来自iframe2的消息",
    // });
  };

  const channel2Port1Onmessage = (event) => {
    console.log("channel2.port1 onmessage: ", event.data);

    // channel1.port2.postMessage({
    //   channel: "channel1",
    //   message: "channel1 转发来自iframe2的消息",
    // });
  };

  iframe1.addEventListener("load", function () {
    channel1.port1.onmessage = channel1Port1Onmessage;
    iframe1.contentWindow.postMessage(
      {
        channel: "channel1",
      },
      "*",
      [channel1.port2]
    );
  });

  iframe2.addEventListener("load", function () {
    channel2.port1.onmessage = channel2Port1Onmessage;
    iframe2.contentWindow.postMessage(
      {
        channel: "channel2",
      },
      "*",
      [channel2.port2]
    );
  });
});
