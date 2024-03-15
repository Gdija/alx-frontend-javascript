interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [attName: string]: any;
}

export interface printTeacherFunction{
    (firstName: string, lastName: string): string
}
export function printTeacher(firstName: string, lastName:string): string{
    return`${firstName[0]}. ${lastName}`;
};
export interface StudentClassConstructor{
    new (firstName: string, lastName: string): StudentClass;
}
export interface StudentClassInter{
    workOnHomework(): string;
    displayName(): string;
}
export class StudentClass implements StudentClassInter{
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    workOnHomework(): string{
        return 'Currently working';
    };
    displayName(){
        return `${this.firstName}`;
    }


}