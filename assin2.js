//employee salary increment
function Employee(name, id, salary,place, company){
       this.name= name;
       this.id= id;
       this.salary= salary;
       this.place= place;
       this.company= company;
     this.joining= function() {
           console.log(this.name + ' is joining');
       },
      this.working= function() {
          console.log(this.name + ' is working in a good organisation');
      },

      this.promoting= function() {
          console.log(this.name + ' is promoting');
      }
       this.salaryincr = function(percent) {
             this.salary += (this.salary*percent/100);
       }

    }

    var emp1 = new Employee('Vikas',4569,100000,'Mumbai','Vipro'); 
    var emp2 = new Employee('Ajay',7896,45562,'Jaipur','Infosys');
    var emp3 = new Employee('Koushal',1234,50000,'khargone','techMahindra');
    var emp4 = new Employee('Rahul',3569,2115,'chennai','Vipro'); 
    var emp5 = new Employee('Savan',9896,55562,'Jaipur','Bosch');        

     
    
    console.log(emp1.place);
    console.log(emp2.place);
    console.log(emp3);
    console.log(emp4.salary);
    console.log(emp5.salary);
    emp1.working();
    emp2.joining();
    emp3.promoting();
    emp1.salaryincr(emp1.salary,50);
    emp3.salaryincr(emp3.salary,100);
    console.log(emp1.salary);
    console.log(emp3.salary);
