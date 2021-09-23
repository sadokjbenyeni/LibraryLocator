import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
@Component({
  selector: 'app-framework',
  templateUrl: './framework.component.html',
  styleUrls: ['./framework.component.scss']
})
export class FrameworkComponent implements OnInit {

  private static readonly DARK_THEME_CLASS = 'dark-theme';
  private static readonly DARK_THEME_LIGHT = 'light';
  private static readonly DARK_THEME_DARK = 'dark';
  public theme = localStorage.getItem('theme-value');
  public mobile = false;
  constructor(@Inject(DOCUMENT) private document: Document) {
  }

  ngOnInit(): void {
    localStorage.setItem('theme-value', 'light');
    this.initTheme();
    if (window.screen.width < 600) {
      this.mobile = true;
    }
  }

  public initTheme(): void {
    if (localStorage.getItem('theme-value') === FrameworkComponent.DARK_THEME_DARK) {
      this.document.documentElement.classList.add(FrameworkComponent.DARK_THEME_CLASS);
    }
  }

  public toggleTheme(): void {

    if (this.theme === FrameworkComponent.DARK_THEME_DARK) {
      this.document.documentElement.classList.remove(FrameworkComponent.DARK_THEME_CLASS);
      this.theme = FrameworkComponent.DARK_THEME_LIGHT;
      localStorage.setItem('theme-value', FrameworkComponent.DARK_THEME_LIGHT);

    }
    else if (this.theme === FrameworkComponent.DARK_THEME_LIGHT) {
      this.document.documentElement.classList.add(FrameworkComponent.DARK_THEME_CLASS);
      this.theme = FrameworkComponent.DARK_THEME_DARK;
      localStorage.setItem('theme-value', FrameworkComponent.DARK_THEME_DARK);
    }
  }
}
