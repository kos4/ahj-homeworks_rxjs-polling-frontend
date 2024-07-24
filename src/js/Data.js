import { ajax } from 'rxjs/ajax';
import { map, catchError, of } from 'rxjs';
import Messages from "./Messages";

export default class Data {
  constructor() {
    this.host = 'https://ahj-homeworks-rxjs-polling-backend.onrender.com/';
  }

  getMessages(container) {
    const messages = new Messages(container);
    const obs$ = this.createRequest('messages/unread');
    obs$.subscribe({
      next: value => messages.addMessages(value),
      error: err => console.log(err)
    });
  }

  createRequest(url) {
    return ajax({
      url: this.host + url,
      crossDomain: true,
    }).pipe(
      map(ajaxResponse => ajaxResponse.response.messages),
      catchError(error => {
        console.log('error: ', error);
        return of([]);
      })
    );
  }
}