import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {
  imageURL!:SafeUrl
  image!:any
  @Input() url!:string;
  constructor(private sanitizer: DomSanitizer, private sharedService: SharedService) {
   }

  ngOnInit(): void {
    this.sharedService.getImage(this.url).subscribe(res => {
      this.image = res.image
      this.imageURL = this.sanitizer.bypassSecurityTrustUrl(`data:image/jpg;base64, ${this.image}`)
    })
  }

}
