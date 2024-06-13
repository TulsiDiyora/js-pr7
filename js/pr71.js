let sd = document.getElementById('sd');
let fd = document.getElementById('fd');
let pd = document.getElementById('pd');
  class school{
    constructor(name, email, conteact){
        this.name = name;
        this.email = email;
        this.conteact = conteact;
    }

    studentDiteal(){
       sd.innerHTML += "Student Name : " + this.name + "<br>" + "Student Email : " + this.email + "<br>" + "Student Contact : " + this.conteact + "<br>" + "<br>";
    }

    facultyDiteal(){
        fd.innerHTML += "faculty Name : " + this.name + "<br>" + "faculty Email : " + this.email + "<br>" + "faculty Contact : " + this.conteact + "<br>" + "<br>";
     }

     peonDiteal(){
        pd.innerHTML += "peon Name : " + this.name + "<br>" + "peon Email : " + this.email + "<br>" + "peon Contact : " + this.conteact + "<br>" + "<br>";
     }
    
}

let s1 = new school("tulsi", "tulsi12@gmail.com", "852369741");
s1.studentDiteal();
let f1 = new school("Pooja", "pooja12@gmail.com", "852854541");
f1.facultyDiteal();
let p1 = new school("Mishal", "mishal12@gmail.com", "8524697258");
p1.peonDiteal();