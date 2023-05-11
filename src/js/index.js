const namesStudents = [{
    name: 'ciclano',
    rm: 12648
},
{
    name: 'deutrano',
    rm: 12308
},
{
    name: 'fulano',
    rm: 12333
}
]

document.getElementById('btn').addEventListener('click', (ev) => {
    ev.preventDefault()
    let name = document.getElementById('fullNameStudent').value
    let rm = document.getElementById('RmStudent').value
    if (name !== '' && rm !== '') {
        render(name, rm)
    }
    else {
        alert('informe os dados certos')
    }

})
function render(name, rm) {
    const personStudnet = namesStudents.find(ele => ele.name == name && ele.rm == rm)
    console.log(person)
}