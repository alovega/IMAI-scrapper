export class ProfileData {
    statusCode!: number;
    data!: [User];
  }

export interface Profile {
    account: string
}

export class User {
  profile_image_link!:string;
  account!:any
  is_verified!:any;
  profile_name!:any
  biography?:any
  posts_count!:any
  followers!:any
  following!:any
  likes!:any
  bussiness_email?:any
  external_url?:any
  id?:any
  caption?:any
  media_type?:any
  datetime?:any;
  image_url?:any;
  url?: any;
  comments?:any;
  thumbnail_src?:any
  thumbnails?:[any]
}