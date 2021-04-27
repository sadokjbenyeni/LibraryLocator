import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
@Component({
  selector: 'app-home-list',
  templateUrl: './home-list.component.html',
  styleUrls: ['./home-list.component.scss']
})
export class HomeListComponent implements OnInit {

  private static readonly DARK_THEME_CLASS = 'dark-theme';
  private static readonly DARK_THEME_LIGHT = 'light';
  private static readonly DARK_THEME_DARK = 'dark';

  public theme = HomeListComponent.DARK_THEME_DARK;

  constructor(@Inject(DOCUMENT) private document: Document) {
  }

  ngOnInit(): void {
  }

  public toggleTheme(): void {
    if (this.theme === HomeListComponent.DARK_THEME_LIGHT) {
      this.document.documentElement.classList.remove(HomeListComponent.DARK_THEME_CLASS);
      this.theme = 'dark';
    }
    else if (this.theme === HomeListComponent.DARK_THEME_DARK) {
      this.document.documentElement.classList.add(HomeListComponent.DARK_THEME_CLASS);
      this.theme = 'light';
    }
  }
  // public selectDarkTheme(): void {
  //   this.document.documentElement.classList.add(HomeListComponent.DARK_THEME_CLASS);
  //   this.theme = HomeListComponent.DARK_THEME_DARK;
  // }

  // public selectLightTheme(): void {
  //   this.document.documentElement.classList.remove(HomeListComponent.DARK_THEME_CLASS);
  //   this.theme = HomeListComponent.DARK_THEME_LIGHT;
  // }
}
