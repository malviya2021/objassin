 function Song(singer,movie,actor,actress,writter,name){
    this.singer = singer;
    this.name = name;
    this.actgor = actor;
    this.actress = actress;
    this.movie = movie;
    this.writter = writter;
    this.play = function(){
        console.log(this.nmae +' is playing');
    }
    this.stopPlay = function() {
    console.log(this,name +' is stop playing');   
    }
    this.searching = function() {
        console.log(this.name +' searching'); 
    }

    var song1= new Song('Arijeet','Holiday','Akshay kumar','kajol', 'kabir','Gajab ka hai din');
    var song2= new Song('Himesh','Jhalak','Sanni','kajol', 'VikAS','Apka ka surur');
    var song3= new Song('Shaan','koyla','Ajay','kajol', 'kabir','tu hi');
    var song4= new Song('kishoe kumar','sholey','Amitabh','Rekha', 'kabir','ye dosti');

    console.log(song1.movie);
    console.log(song2.actor);
    console.log(song3.actress);
    console.log(song1.singer);
    console.log(song4.writter);
    console.log(song1);
    song2.play();
    song3.stopPlay();
    song1.searching();
    
    
    
}