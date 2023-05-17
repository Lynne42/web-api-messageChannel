console.log('Hello!');
window.addEventListener('DOMContentLoaded', () => {
  const iframe1 = document.getElementById('iframe1');
  const iframe2 = document.getElementById('iframe2');

  const channel1 = new MessageChannel();
  const channel2 = new MessageChannel();

  // 在 iframe1 中发送消息给 iframe2
  iframe1.contentWindow.postMessage('Hello from iframe1', '*', [
    channel1.port2,
  ]);

  // 在 iframe2 中发送消息给 iframe1
  iframe2.contentWindow.postMessage('Hello from iframe2', '*', [
    channel2.port2,
  ]);

  channel1.port1.onmessage = (event) => {
    console.log('Message received in iframe1:', event.data);
  };

  channel2.port1.onmessage = (event) => {
    console.log('Message received in iframe2:', event.data);
  };
});
