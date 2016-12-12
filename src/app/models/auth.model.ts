export interface User{
  authenticated:boolean,
  profile:Profile
}
export interface Profile{
    name:string,
    nick:string,
    email:string,
    image:string,

}

