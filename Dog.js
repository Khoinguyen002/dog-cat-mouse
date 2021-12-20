import chalk from 'chalk'
import { prototype } from 'events'
const log = console.log

function Dog(name) {
  this.name = name
  this.stomach = []
  this.lung = ['oxygen', 'CO2']
  this.dead = false
  this.favorite = []
}

Dog.prototype.eat = (cat) => {
  this.stomach.push(cat)
}

Dog.prototype.sick = (virus) => {
  this.lung.push(virus)
}

Dog.prototype.die = () => {
  this.dead = true
}

Dog.prototype.entertain = favorite => {
  this.favorite.push(favorite)
}

Dog.prototype.sayHi = () => {
  log('Hi! Im a ' + chalk.blue(this.name))
}

module.exports = Dog