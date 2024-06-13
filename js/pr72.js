let cn = document.getElementById('cn');
let pn = document.getElementById('pn');

class pc {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}

class child extends pc{
    constructor(name, age){
        super(name, age);
    }

    studentName(){
        cn.innerHTML +="Child Name : " + this.name + "<br>" + "<br>";
    }

    studentAge(){ 
        cn.innerHTML +="Child Age : " + this.age + "<br>" + "<br>";
    }
}
class perent extends pc{
    constructor(name, age){
        super(name, age);
    }

    perentName(){
        pn.innerHTML +="Perent Name : " + this.name + "<br>" + "<br>";
    }

    perentAge(){ 
        pn.innerHTML +="Perent Age : " + this.age + "<br>" + "<br>";
    }
}

c1 = new child("Tulsi", 19);
c1.studentName();
c1.studentAge();

p1 = new perent("Kalpeshbhai", 41);
p1.perentName();
p1.perentAge();
