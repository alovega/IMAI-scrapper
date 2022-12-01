import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from '../app.service';
import { SharedService } from '../shared/shared.service';


@Component({
  selector: 'app-get-profile',
  templateUrl: './get-profile.component.html',
  styleUrls: ['./get-profile.component.css']
})
export class GetProfileComponent implements OnInit {
  accountForm: any;
  submitted = false
  constructor(private fb: FormBuilder, private appService: AppService, private route: Router, private sharedService:SharedService) { }

  ngOnInit(): void {
    this.accountForm = this.fb.group({
      account: ['', Validators.required]
    })
  }

  get accountFormControl(){
    return this.accountForm.controls;
  }

  onSubmit(){
    this.submitted = true;

    if(this.accountForm.valid){
      console.log(this.accountForm.value)
      this.getProfile(this.accountForm.value)
      this.route.navigate(['profile-detail', this.accountForm.value.account]);
    }
  }

  getProfile(account:any){
    return this.appService.getProfile(account).subscribe((profile:any) =>{
      this.sharedService.profile_data.next(profile.data)
      console.log(profile)
    })
  }

}
