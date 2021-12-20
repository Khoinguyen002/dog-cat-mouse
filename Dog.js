function Dog() {
  this.stomach = []
}

Dog.prototype.eat = (cat) => {
  this.stomach.push(cat)
}

Dog.prototype.sick = (virus) => {
  this.lung.push(virus)
}