String.prototype.router = function(a, b=a?a:{}, pop=b.pop ? b.pop : null) {
    var page = '', path = (this.valueOf()).replace(window.location.host,'');
    window.GET = path===window.location.origin ? [] : route.get.path.dir(path), arr = []; console.log({GET,path});
    if(GET[0]) {

        if(GET[1]) {

            if(GET[2]) {

                if(GET[3]) { page = GET[3]; } 
                else { page = GET[2]; }

            }
            else { page = "overview"; }

        }
        else { page = "home"; }

    } 
    else { page = "/";  }
    return new Promise((resolve, reject) => {
        if(path) {
          body.dataset.page = page; body.dataset.path = path; 
          history.pushState(path,null,path); resolve(path); 
        }
        else { reject({error:'path error',code:666}); }
    });
};
