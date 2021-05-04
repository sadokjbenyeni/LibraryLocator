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
  public theme = localStorage.getItem('theme-value');
  public mobile = false;
  constructor(@Inject(DOCUMENT) private document: Document) {
  }

  ngOnInit(): void {
    this.initTheme();
    if (window.screen.width < 600) {
      this.mobile = true;
    }
  }

  public initTheme(): void {
    if (localStorage.getItem('theme-value') === HomeListComponent.DARK_THEME_DARK) {
      this.document.documentElement.classList.add(HomeListComponent.DARK_THEME_CLASS);
    }
  }

  public toggleTheme(): void {
    if (this.theme === HomeListComponent.DARK_THEME_DARK) {
      this.document.documentElement.classList.remove(HomeListComponent.DARK_THEME_CLASS);
      this.theme = HomeListComponent.DARK_THEME_LIGHT;
      localStorage.setItem('theme-value', HomeListComponent.DARK_THEME_LIGHT);

    }
    else if (this.theme === HomeListComponent.DARK_THEME_LIGHT) {
      this.document.documentElement.classList.add(HomeListComponent.DARK_THEME_CLASS);
      this.theme = HomeListComponent.DARK_THEME_DARK;
      localStorage.setItem('theme-value', HomeListComponent.DARK_THEME_DARK);
    }
  }
}
