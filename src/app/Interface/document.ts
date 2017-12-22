import {Tag} from "./tag";

export interface Document {
    id?: Number, // Id          document.id
    name: string, // Given name document.name
    thumbnail: string,
    tags?: Tag[]
    //path: string, // File path  document.path
    //file: string, // File name  document.file
}