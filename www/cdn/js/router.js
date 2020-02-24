String.prototype.router = function(b, state = this.valueOf()) { //window.location.href = state;
  return new Promise(function(resolve, reject) {
    history.pushState(state,null,state)
  });
};