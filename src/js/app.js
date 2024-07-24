import Data from './Data';

const data = new Data();
const container = document.querySelector('.letters');

data.getMessages(container);
setInterval(data.getMessages.bind(data, container), 5000);
