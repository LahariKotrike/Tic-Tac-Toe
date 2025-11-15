const stu = {
    //direct way of creating an aobject
    fullname  : "aff",
    marks : 20,
    printMarks: function(){
        console.log("marks = " ,this.marks)
    },
};


const employee ={
    calTax() {
        console.log("tax rate is 10%");
    },
    caltax1 : function(){
        console.log("tax rate is 100%");
    }
};

const aff = {
    salary : 5000,

};

const rani = {
    salary : 80000,
}

aff .__proto__ = employee;
rani.__proto__ = stu;




