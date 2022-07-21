export class User {
    id: number;
    sapid: string;
    email: string='';
    password: string='';
    profile:string='';
    matricule: string;
    nom : string;
    prenom  : string;
    service : string;
    tel : string;

    constructor(id: number,sapid: string,email: string,password: string,profile:string,matricule: string,nom : string,prenom  : string,service : string,tel : string){
        this.id=id;
        this.sapid=sapid;
        this.email=email;
        this.password=password;
        this.profile=profile;
        this.matricule=matricule;
        this.nom=nom;
        this.prenom=prenom;
        this.service=service;
        this.tel=tel;
    }
    
}