export class User {
    name: string;
    surname: string;
    mail: string;
    age: string;
    id: number;
    constructor(name?: string,
                surname?: string,
                mail?: string,
                age?: string,
                id?: number) {
        this.name = name || '';
        this.surname = surname || '';
        this.mail = mail || '';
        this.age = age || '0';
        this.id = id || Date.now();
    }
}
