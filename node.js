import express from "express";

const app = express();

const students = [
  {
    id: 1,
    name: "Eman",
    city: "sadat",
  },
  {
    id: 2,
    name: "Ahmed",
    city: "Tanta",
  },
  {
    id: 3,
    name: "Maha",
    city: "Menia",
  },
  {
    id: 4,
    name: "Ali",
    city: "Cairo",
  },
  {
    id: 5,
    name: "Mohamed",
    city: "Tanta",
  },
];

const studentsFunction = (request, response) => {
    let output = "<ol>";
    for (let i=0; i < students.length; i++) {
        const student = students[i];
        output += "<li  style='font-size:20px; font-weight:bold; padding-bottom:5px ;'>" + student.name + "</li>";
        }
        output += "</ol>";
        response.send(output);
    };
    
    app.get("/students", studentsFunction);
    
    app.listen(5000);