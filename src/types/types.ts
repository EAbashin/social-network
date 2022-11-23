export type PostType = {
    id: number
    img: string
    message: string
    likesCount: number
};
export type ContactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
};
export type PhotosType = {
    small: string | null
    large: string | null
};
export type UserProfileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactsType
    photos: PhotosType
};

export type UserType = {
    "name": string
    "id": number
    "photos": PhotosType;
    "status": null | string
    "followed": boolean
};