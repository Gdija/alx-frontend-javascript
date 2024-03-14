interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [attName: string]: any;
}

interface printTeacherFunction{
    (firstName: string, lastName: string): string
}
function printTeacher(firstName: string, lastName:string): string{
    return`${firstName[0]}. ${lastName}`;
};