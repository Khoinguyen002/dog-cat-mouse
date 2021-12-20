function Dog() {
  this.stomach = []
  this.dead = false
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