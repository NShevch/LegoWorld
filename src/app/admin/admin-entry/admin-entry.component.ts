import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-admin-entry',
  templateUrl: './admin-entry.component.html',
  styleUrls: ['./admin-entry.component.css']
})
export class AdminEntryComponent implements OnInit {
  wrongPassword: boolean = false;
  form!: FormGroup;

  constructor(
    private router: Router,
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      password: new FormControl(null, Validators.required)
    });
  }

  onExitClick() {
    this.router.navigate(["/main"]);
  }

  onSubmitClick() {
    if (this.form.get('password')?.value === "1111") {
      this.wrongPassword = false;
      this.authService.logIn();
      this.router.navigate(["/adminPage"]);
    } else {
      this.wrongPassword = true;
      // this.authService.logOut();
      setTimeout(() => {
        this.wrongPassword = false;
      }, 1000);
    }

  }
}
