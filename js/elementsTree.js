

const chartSection = {id: null, name: 'chartSection', elementType: 'div', children: [], render: true}

const userSection = {id: null, name: 'userSection', elementType: 'div', children: [], render: true}

///////////////////////////////////////////////////////////////////////////////////

const options = [
    {id: null, name: 'javascript', label: 'Javascript', elementType: 'option', children:[], render: true},
    {id: null, name: 'css', label: 'CSS', elementType: 'option', children:[], render: true},
    {id: null, name: 'html', label: 'HTML', elementType: 'option', children:[], render: true},
]

const inputs = [
    {id: null, name: 'skills', label: 'Skills', elementType: 'select', children: options, render: true},
    {id: null, name: 'age', label: 'Age', elementType: 'input', children: [], render: true},
    {id: null, name: 'lastName', label: 'Last Name', elementType: 'input', children: [], render: true},
    {id: null, name: 'firstName', label: 'First Name', elementType: 'input', children: [], render: true},
]

const formSection = {id: null, name: 'formSection', elementType: 'div', children: inputs, render: true,}

///////////////////////////////////////////////////////////////////////////////////

const app = {id: null, name: 'app', elementType: 'div', children: [formSection, userSection], render: true}

const produceIdWrap = (object, count) => {
    const produceId = (object) => {
        object.id = count;
        $.map(object.children, (child)=>{
            count += 1;
            produceId(child)
        })
    };
    produceId(object,)
    return object;
}

const newApp = produceIdWrap(copyElementTreeWrap(app), 0)

console.log(newApp)


