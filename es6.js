
const inventory = [
    {type: "machine", value: 5000},
    {type: "machine", value: 650},
    {type: "duck", value: 10},
    {type: "furniture", value: 1200},
    {type: "machine", value: 77}
    ]
const filtro = inventory.filter((v) => v.type === 'machine')

const suma= filtro.reduce((v,acum) => v + acum.value, 0)

console.log(filtro)
console.log("la suma es " + suma);