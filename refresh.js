function restore(){
    let getData2 = localStorage.getItem(sessionStorage, 'newStudentDatabase')
    restoreArray = JSON.parse(getData2);
    console.log(newStudentArray)
    devStudents.push(newStudentArray)
    //localStorage.getItem('newStudentDatabase', JSON.stringify(newStudentArray))
    
    //restoreArray.prototype.showStudentDetails
}