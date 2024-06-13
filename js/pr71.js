let sd = document.getElementById('sd');
let fd = document.getElementById('fd');
let pd = document.getElementById('pd');

class school{
    constructor(name, email, conteact){
        this.name = name;
        this.email = email;
        this.conteact = conteact;
    }
}
class student extends school{

    constructor(name, email, conteact){ 
        super(name, email, conteact);
    }
    studentName(){
        sd.innerHTML +="Student Name : " + this.name + "<br>" + "<br>";
    }
    studentEmail(){
        sd.innerHTML +="Student Email : " +  this.email + "<br>" + "<br>";
    }
    studentContect(){
        
        sd.innerHTML +="Student Contect : " + this.conteact + "<br>" + "<br>";
    }
}

class faculty extends school{
    constructor(name, email, conteact){ 
        super(name, email, conteact);
    }
    facultyName(){
        fd.innerHTML +="Faculty Name : " + this.name + "<br>" + "<br>"; 
    }
    facultyEmail(){
        fd.innerHTML +="Faculty Email : " + this.email + "<br>" + "<br>";
    }
    facultyContect(){
        fd.innerHTML +="Faculty Contect : " + this.conteact + "<br>" + "<br>";
    }
}

class peon extends school{
    constructor(name, email, conteact){ 
        super(name, email, conteact);
    }
    peonName(){
        pd.innerHTML +="Peon Name : " + this.name + "<br>" + "<br>";
    }
    peonEmail(){
        pd.innerHTML +="Peon Email : " + this.email + "<br>" + "<br>";
    }
    peonContect(){
        pd.innerHTML +="Peon Contect : " + this.conteact + "<br>" + "<br>";
    }
}

let s1 = new student("Tulsi", "tulsi12@gmail.com", "852369741");
s1.studentName();
s1.studentEmail();
s1.studentContect();

let f1 = new faculty("Pooja", "pooja12@gmail.com", "852369741");
f1. facultyName();
f1. facultyEmail();
f1. facultyContect();

let p1 = new peon("Mishal", "mishal12@gmail.com", "8524697258");
p1.peonName();
p1. peonEmail();
p1. peonContect();