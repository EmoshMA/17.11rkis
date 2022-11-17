class Employee {
	#name;
	#salary;
	
	constructor(name, salary) {
		this.#name = name;
		this.#salary = salary;
	}
	getName() {
		return this.#name;
	}
	getSalary(){
	  return this.#salary
	}
}

let employees = [
  new Employee('fef', 4500),
  new Employee('faf', 2700),
  new Employee('fyf', 3200),
  new Employee('fif', 6400)
  ]
  
for (let employee of employees) {
	console.log(employee.getName() + " " + employee.getSalary());
}