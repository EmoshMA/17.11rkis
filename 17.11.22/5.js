class Empoloyee{
    show(){
        return 'где мои грощи'
    }
}


let user = new Empoloyee();
user.name = "Varvara";
user.salary = 500;

console.log(user.show());

console.log(user.name);
console.log(user.salary);


let user2 = new Empoloyee();
user2.name = "Andrew";
user2.salary = 400000;
console.log(user2.name);
console.log(user2.salary);

