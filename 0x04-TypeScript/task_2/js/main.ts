export interface DirectorInterface{
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
}
export interface TeacherInterface{
    workFromeHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
}
export class Director implements DirectorInterface{
    // getCoffeeBreak(): string {
    //     throw new Error("Method not implemented.");
    // }
    workFromHome(): string {
        return 'Working from home';
    }
    getCoffeeBreak(): string {
        return 'Getting a coffee break';
    }
    workDirectorTasks(): string {
        return 'Getting to director tasks';
    }
}
export class Teacher implements TeacherInterface{
    workFromeHome(): string {
        return 'Cannot work from home';
    }
    getCoffeeBreak(): string {
        return 'Cannot have a break';
    }
    workTeacherTasks(): string {
        return 'Getting to work';
    }
}
export function createEmployee(salary: string | number): Director | Teacher{
    if(typeof salary === 'number' && salary < 500) {
        return new Teacher();
    }else{
        return new Director();
    }
}

// Creating functions specific to employees
function isDirector(employee: (Director | Teacher)) {
    return employee instanceof Director;
}
function executeWork(employee: (Director | Teacher)){
    if (employee instanceof Director){
         return employee.workDirectorTasks();
    }else{
        return employee.workTeacherTasks();
    }
}
executeWork(createEmployee(200));
executeWork(createEmployee(1000));
// String literal types
type Subjects= "Math" | "History";

function teachClass(todayClass: Subjects): string{
    if(todayClass === 'Math'){
        return 'Teaching Math';
    } else if(todayClass === 'History'){
        return 'Teaching History';
    }
}
console.log(teachClass("Math"));
console.log(teachClass("History"));
