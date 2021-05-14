
export type PostType = {
    id: number 
    message: string
    likesCounts: number
  }
  export type ContactsType = {
    guthub: string
    vk: string
    facebook: string
    twitter: string
    website: string
    youtube: string
    mainlink: string
  }
  export type PhotosType = {
    small: string | null
    large: string | null
  }
 export  type ProfileType = {
  userId: number
  lookingForAJob: boolean
  lookingForAJobDescription: string
  fullName: string
  contacts: ContactsType
  photos: ProfileType
  }
  export type UserType = {
    id: number
    name: string
    status: string
    photos: PhotosType
    followed: boolean
 }