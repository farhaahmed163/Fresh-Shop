import { Component, DoCheck } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements DoCheck {
  ngDoCheck(): void {
    this.scrollToTop()
  }
  scrollToTop() {
    const scrollButton = document.getElementById("btn-back-to-top") as HTMLButtonElement;

    if (
      document.body.scrollTop > 25 ||
      document.documentElement.scrollTop > 25
    ) {
      scrollButton.style.display = 'block';
    } else {
      scrollButton.style.display = 'none';
    }
  }
  ToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

}

