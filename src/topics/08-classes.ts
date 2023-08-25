//Se define todo directamente en el constructor
export class Person{

    constructor ( public name: string,
        public address: string = 'No Address'){

    }
}

// export class Hero extends Person{
//    /**
//     *
//     */
//    constructor( public alterEgo: string,
//     public age: number,
//     public realName:string,) {
//         super(realName,'Newyork');  
//    }
// }

export class Hero {
    constructor( public alterEgo: string,
     public age: number,
     public realName:string,
     public person: Person) {

    }
 }


const tony = new Person('Tony','Colombia')
const ironman = new Hero('inroman',45,'Stark',tony);

console.log(ironman);