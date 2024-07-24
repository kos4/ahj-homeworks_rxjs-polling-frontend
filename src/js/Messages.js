export default class Messages {
  constructor(container) {
    this.container = container;
  }

  addMessages(messages) {
    messages.forEach(data => this.createMessage(data));
  }

  createMessage(data) {
    this.container.insertAdjacentHTML('afterbegin', this.markup(data));
  }

  checkLength(str, length = 15) {
    if (str.length > 15) {
      str = str.slice(0, length) + '...';
    }

    return str;
  }

  markup(data) {
    return `
      <div class="letters__item">
        <div class="letters__item-email">${data.from}</div>
        <div class="letters__item-subject">${this.checkLength(data.subject)}</div>
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