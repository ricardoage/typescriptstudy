export interface Passenger{
    name: string;
    children?:string [];
}

const passenger1: Passenger = {
    name:'Fernando'
}

const passenger2: Passenger = {
    name: 'Melissa',
    children:['Natalia','Elizabeth']
}

const printChildren = (passenger: Passenger) =>{
    const howManyChildren = passenger.children?.length;
    console.log (passenger.name ,howManyChildren);
}

printChildren(passenger1);
printChildren(passenger2);

const returnChildNumber = (passenger: Passenger): number =>{
    // Optional chaining
    const howManyChildren = passenger.children?.length || 0;
    // const howManyChildren = passenger.children?.length;

    console.log (passenger.name, howManyChildren);

    return howManyChildren
}

returnChildNumber(passenger1);