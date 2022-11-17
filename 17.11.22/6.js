class Empoloyee{
    show(name, salary){
        return name + ' путин где брать деньги'+ salary;
    }
}


let user = new Empoloyee();
user.name = "Valeria";
user.salary = 500;
console.log(user.name);
console.log(user.salary);



let user2 = new Empoloyee();
user2.name = "Anton";
user2.salary = 4500000000;

console.log(user2.name);
console.log(user2.salary);
console.log(user.show('Anton' , 'Valeria'));