import { IImage } from "./IImage";
import { ILink } from "./ILink";

export interface IService{
    icon:IImage,
    name:string
    website?:ILink
    description:string
}