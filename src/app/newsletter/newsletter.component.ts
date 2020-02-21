import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { NewsLetterService } from '../lib/newsletter.service';


@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.css']
})
export class NewsletterComponent implements OnInit {
  newsletterForm = this.fb.group({
    email: [null, [Validators.email, Validators.required]]
  })
  disabledButton = false;
  formError = {
    show: false,
    message:''
  }
  formSuccess:boolean = false;

  constructor(
    private fb: FormBuilder,
    private newsletterService: NewsLetterService
  ) { }

  ngOnInit() {
  }
  submitForm() {
    this.disabledButton = true;
    if(this.newsletterForm.valid) {
      this.newsletterService.subscribeUser(this.newsletterForm.value.email).subscribe(data=> {
        this.formSuccess = true;
        this.newsletterForm.reset();
        this.enableButton();
      },
      error => {
        this.handleError('show', error)
        this.enableButton();
      })
    } else {
      // handle errors
      this.handleError('show', "You need a valid email")
      this.enableButton();
    }
  }

  handleError(type:string, message: string) {
    if(type === 'reset') {
      this.formError = {
        show: false,
        message
      }
    } else {
      this.formError = {
        show: true,
        message
      }

    }
  }
  enableButton() {
    setTimeout(() => {
      this.disabledButton = false
    }, 2000)
  }
}
