const assert = require('assert')
const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt turpis sit amet tortor venenatis egestas. Praesent fermentum elit felis, nec lacinia lectus rutrum eget`

const response = text.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ')

assert.strictEqual(response, 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Morbi Tincidunt Turpis Sit Amet Tortor Venenatis Egestas. Praesent Fermentum Elit Felis, Nec Lacinia Lectus Rutrum Eget');


