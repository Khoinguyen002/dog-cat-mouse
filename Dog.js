function Dog() {
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