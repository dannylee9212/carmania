import { Component, OnInit } from '@angular/core';
import { RequestService } from '../lib/requests.service';
import { Validators, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styles: []
})
export class ContactComponent implements OnInit {
  contactForm = this.fb.group({
    email: [null, [Validators.email, Validators.required]],
    subject: [null, [Validators.required]],
    message: [null, [Validators.required]]
  })

  subjectsForm = [
    'give me work',
    'got a proposal',
    'Advertise',
    'other'
  ]
  onSuccess = false;
  onError = {
    show: false,
    message: ""
  }
  constructor(private requestService: RequestService, private fb: FormBuilder) {
    
  }

  ngOnInit() {
  }

  submitForm() {
    if(this.contactForm.valid) {
      this.resetError();
      this.requestService.sendMessage(this.contactForm.value).subscribe(
        data => {
          this.onSuccess = true;
          this.contactForm.reset();
        },
        error => {
          this.onError = {
            show: true,
            message: "Sorry, somethimg happened. Try again"
          }
        }
      )
    } else {
      this.onError = {
        show: true,
        message: "The form is not valid"
      }
    }
  }
  resetError() {
  this.onError = {
    show: false,
    message: ""
  }
  }
}
