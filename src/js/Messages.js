export default class Messages {
  constructor(container) {
    this.container = container;
  }

  addMessages(messages) {
    messages.forEach((data) => this.createMessage(data));
  }

  createMessage(data) {
    this.container.insertAdjacentHTML('afterbegin', Messages.markup(data));
  }

  static checkLength(str, length = 15) {
    let value = str;
    if (value.length > 15) {
      value = `${value.slice(0, length)}...`;
    }

    return value;
  }

  static markup(data) {
    return `
      <div class="letters__item">
        <div class="letters__item-email">${data.from}</div>
        <div class="letters__item-subject">${Messages.checkLength(data.subject)}</div>
        <div class="letters__item-date">${new Date(data.received).toLocaleDateString(undefined, {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  })}</div>
      </div>
    `;
  }
}
