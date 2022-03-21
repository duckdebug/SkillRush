function createSubjectDiv(subject){
    let divElement = document.createElement('div')
    divElement.className="subjectDiv"
    let divElementText = document.createTextNode(subject)
    divElement.appendChild(divElementText)
    document.body.appendChild(divElement)
    return divElement
}
const subjects = ["Java", "C++", "Python", "C", "Ruby", "BhaiLang","GoLang","Groovy"];
for (i = 0; i < subjects.length; i++){
    createSubjectDiv(subjects[i]);
}
