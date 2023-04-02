import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-entry',
  templateUrl: './admin-entry.component.html',
  styleUrls: ['./admin-entry.component.css']
})
export class AdminEntryComponent implements OnInit {
  wrongPassword: boolean = false;
  form!: FormGroup;

  constructor(private router: Router) { }

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
      this.router.navigate(["/adminPage"]);
    } else {
      this.wrongPassword = true;
      setTimeout(() => {
        this.wrongPassword = false;
      }, 1000);
    }

  }
}
