import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-entry',
  templateUrl: './admin-entry.component.html',
  styleUrls: ['./admin-entry.component.css']
})
export class AdminEntryComponent implements OnInit {
  wrongPassword: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onExitClick() {
    this.router.navigate(["/main"]);
  }

  onSubmitClick(password: string) {
    if (password === "1111") {
      this.wrongPassword = false;
      this.router.navigate(["/adminPage"]);
    } else {
      this.wrongPassword = true;
      setTimeout(() => {
        this.wrongPassword = false;
      }, 1000);
    }

  }
}
