
let elForm = document.getElementById('Student-form');
let elButton = document.getElementById('submit')

let StudentDB = function(name,school, language) {
    this.name = name
    this.school = school
    this.language = language
    }

 StudentDB.prototype.showStudentDetails = function() {
    let students= [];
    let studentDiv = document.createElement('div');
    let ulElement = document.createElement('ul');
    studentDiv.appendChild(ulElement);
    document.body.appendChild(studentDiv);
    students.push(this.name, this.language,this.school);
    for(student of students){
        let liElement = document.createElement('li');
        ulElement.appendChild(liElement);
        liElement.innerText = student;
    }
}



let JD = new StudentDB ('JD', 'CodePartners', 'JavaScript', 'JD' );
let Paul = new StudentDB ( 'Paul','CodePartners', 'JS CSS & HTML', 'Paul');
let Anna = new StudentDB ('Anna', 'CodePartners', 'CSS' ,'Anna');
let Adrian = new StudentDB ('Adrian', 'CodePartners','HTML', 'Adrian');
let Joseph = new StudentDB ('Joseph', 'CodePartners', 'JS CSS & HTML', 'Joseph');
let Janae = new StudentDB ( 'Janae', 'CodePartner', 'JS AND HTML', 'Janae');

let devStudents = [];
devStudents.push(JD, Paul, Anna, Adrian, Joseph, Janae); 

localStorage.setItem('studentDatabase', JSON.stringify(devStudents));


function displayStudentDetails(array){
    for(let element of array){
        element.showStudentDetails();
    };
};

let name = elForm.name
let school = elForm.school 
let language = elForm.language

console.log(devStudents);
function createNewStudent(event){
    event.preventDefault();
    newStudent = new StudentDB (name.value, language.value, school.value)
    console.log(newStudent);
    devStudents.push(newStudent);
    newStudent.showStudentDetails(newStudent);
    localStorage.setItem('studentDatabase', JSON.stringify(devStudents))
}
displayStudentDetails(devStudents)
elForm.addEventListener('submit', createNewStudent);
