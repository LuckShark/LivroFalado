import { enumGender } from "../enums/enum-gender";

export class Volunteer {
    name?:String;
    email?:String;
    age?: Number;
    sacBenefit?: boolean;
    volunteeringDay?: Array<string>;
    startDate?: Date;
    endDate?: Date;
    observations?: String;
    gender?: enumGender;

    constructor(data:Partial<Volunteer>){
        if(data){
            Object.assign(this,{name:data.name, email:data.email}
            )
        }
    }
}