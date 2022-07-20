export class User {
    id: number=0;
    username: string='';
    email: string='';
    password: string='';
    profile:string='';

    constructor(id: number, username: string, email: string, password: string, profile:string) {
        this.id = id;
        this.username = username;
        this.email = email;
        this.password = password;
        this.profile = profile;
    }
    
}