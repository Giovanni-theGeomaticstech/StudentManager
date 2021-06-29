/*
Purpose: The Interface definitions for the Students
Deals with the API GET and POST Functions
Last Edited: June 28, 2021
*/
import { IStudent, IClass } from "./student_interface"

// Probably in the backend have a classManager??
// Is there a way to send the class data?


export interface IApi{
    updateStudentData(class_:string, student:IStudent, endpoint?:string):void // Updates data for a single student
    updateData(class_:string, students:IClass, endpoint?:string):void // Update data for all the students
    setData(class_:string, students:IClass, endpoint?:string):void // Setting Data for Students
    fetchData(class_:string, endpoint?:string):Promise<IClass> // Fetching Data
}

export interface IClient{
    allData(endpoint:string):Promise<IClass>
}