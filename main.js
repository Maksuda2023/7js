

class Person{
   constructor  (name, surname) {
      this.name = name;
      this.lastname = surname;     
}
print(){
   console.log("Name:",this.name);
   console.log("Surname:",this.surname);
}
}

const person = new Person("john","Joe");
person.print();

class User extends Person {
   constructor(name, surname,password){
      super(name,surname);
      this.password = password;
   }
   print(password){
      if(password === this.password){
         super.print()
      }else{
         console.log("Incorrect password");
      }
   }
} 
const user = new User ("John","Joe","securePassword")
user.print("p")
user.print("securePassword")

