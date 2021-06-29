/*
Purpose: The Interface definitions for the Students
Deals with the Receiving and Sending Student information
Last Edited: June 28, 2021
*/

import { number } from "yargs"
import { uuid4 } from "uuid4"


////////////////////////////////////////////////////////////////////
// CLASS?? Manager??
////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////
// Class of Students Array
export interface IClass{
    className:string
    [index:number]:IStudent // Array of Students
    getStudents(id?:number):Promise<any> //Change to be a UUID
    excelExtract(id?:number):Promise<any[]> // To create the excel doc with data or create the data cards
}

// Student Interface (For individual students)
export interface IStudent{
    studentId: number,
    fname:string,
    lname:string,
    email:string,
    contact:string,
    testGrades:Promise<IAssignment[]>,
    assignmentGrades:Promise<IAssignment[]>,
    finalMark(something?:string):number
}
////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////
// Assignment Interface Array
export interface IAssignmentArray{
    [index:number]:IAssignment
}

// Assignment Interface (For individual assignments)
export interface IAssignment{
    name: string,
    marks: IMarksArray,
}
////////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////////////
// Marks Interface Array
export interface IMarksArray {
    [index:number]:IMarks // The index
}

// Marks Interface (For individual Marks)
export interface IMarks{
    markPercent: number,
    markFrac: number,
    markLevel: string,
    markLetter: string,
    anchorMark: number,
    type: string,//Thinking, Knowledge, Comm, 
}
////////////////////////////////////////////////////////////////////

