class Polygon { 
    constructor(height, width) { 
       this.h = height; 
       this.w = width;
    } 
    test() { 
       console.log("The height of the polygon: ", this.h) 
       console.log("The width of the polygon: ",this. w) 
    } 
 } 
 
 //creating an instance  
 var polyObj = new Polygon(10,20); 
 polyObj.test();  



 ///

 class Student {
    constructor(rno,fname,lname){
       this.rno = rno
       this.fname = fname
       this.lname = lname
       console.log('inside constructor')
    }
    set rollno(newRollno){
       console.log("inside setter")
       this.rno = newRollno
    }
 }
 let s1 = new Student(101,'Sachin','Tendulkar')
 console.log(s1)
 //setter is called
 s1.rollno = 201
 console.log(s1)


 //Class Inheritance and Method Overriding

 class PrinterClass { 
    doPrint() { 
       console.log("doPrint() from Parent called… ");
    }
 }
 class StringPrinter extends PrinterClass { 
    doPrint() { 
       console.log("doPrint() is printing a string…"); 
    } 
 } 
 var obj = new StringPrinter(); 
 obj.doPrint();