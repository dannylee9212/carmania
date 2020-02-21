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
  constructor(
    private fb: FormBuilder,
    private newsletterService: NewsLetterService
  ) { }

  ngOnInit() {
  }
  submitForm() {
    if(this.newsletterForm.valid) {
      this.newsletterService.subscribeUser(this.newsletterForm.value.email).subscribe(data=> {
        console.log(data)
      },
      error => {
        console.log(error)
      })
    } else {
      // handle errors
      console.log()
    }
  }

}
