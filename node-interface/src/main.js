import component from './component'
import main from './main.css'

const elements = component()
console.log(elements)

document.body.appendChild(elements.red)
document.body.appendChild(elements.green)
