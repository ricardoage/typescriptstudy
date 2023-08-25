let skills:string[] = ['Bash','Counter','Healing'];

interface Character{
    name: string;
    hp: number;
    skills: string[];
    hometown?:string;
}

const strider = {
    name:'strider',
    hp:'100',
    skills:['Bash','Counter'],
    hometown:'holii'
};

strider.hometown = 'Pailander'
console.table(strider);
export{};
