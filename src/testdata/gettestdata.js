
import studentList from "./studentlist.json"
import institutionlist from "./institutionlist.json"
export const fetchStudents = async () => {
  // 1. url path api/allstudents
  return studentList
}

export const fetchInstitutionList = async () => {
  // 2. url path api/institutions
  return institutionlist
}

export const fetchInstitutionStudents = async (institutionName) => {
  // 3. what would you use for the url path here?
  return []
}


export const fetchStudentData = async (studentName) => {
  // 4 url path api/studentRoster
  return []
}