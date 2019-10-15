import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  get appTitle(): string {
    return this._Title.getTitle();
  }

  constructor(
    private _Title: Title
  ) { }
}
