import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faHeart, faComment, faCog, faVideo, faClone } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';
import { AppService } from '../app.service';
import { LoaderService } from '../loader.service';
import { Profile, ProfileData, User } from '../profile';
import { SharedService } from '../shared/shared.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  account!:Profile
  loading!:Boolean
  profile!:[any];
  profile_link:any
  display_data!:User;
  sub!: Subscription
  faHeart = faHeart;
  faComment= faComment;
  faCog=faCog;
  faVideo=faVideo;
  faClone=faClone
  constructor(private sharedService: SharedService, private route: ActivatedRoute, public appService:AppService, public loader: LoaderService) { 
    this.account= {account:this.route.snapshot.params['name']}
    this.getProfile(this.account)
    this.sub = this.sharedService.profile_data.subscribe(
      profile_data => {
        console.log(profile_data)
        this.profile = profile_data;
        this.profile_link = this.profile[0].profile_image_link;
        this.display_data = this.profile[0]
      }
    )

  }

  ngOnInit(): void {
    this.sub = this.sharedService.profile_data.subscribe(
      profile_data => {
        console.log(profile_data)
        this.profile = profile_data;
        this.profile_link = this.profile[0].profile_image_link;
        this.display_data = this.profile[0]
      }
    )
  }

  ngAfterContentInit(){
  }

  getProfile(account:any){
    return this.appService.getProfile(account).subscribe((profile:any) =>{
      this.sharedService.profile_data.next(profile.data)
      console.log(profile.data)
    })
  }

  redirect(link:any) {
    window.location.href = link;
  }


}
