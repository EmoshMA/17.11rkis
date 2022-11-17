class Empoloyee{
    show(){
        console.log(this.name);
        console.log(this.salary);
    }
}
let user = new Empoloyee();
user.name = 'Alina';
user.salary = 500;                       
user.show();