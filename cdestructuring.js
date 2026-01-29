const student = {
	fullName: "Joe Blow",
	age: 25,
	country: "Canada"
};

// object destructuring to extract the name and age properties
const { fullName, age } = student;

console.log(fullName);
console.log(age);

/*
 * Expected output:
 * Joe Blow
 * 25
 */