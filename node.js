import express from "express";

const app = express();

const students = [
  {
    id: 1,
    name: "menna",
    city: "sadat",
  },
  {
    id: 2,
    name: "yasser",
    city: "sadat",
  },
  {
    id: 3,
    name: "mohamed",
    city: "Menia",
  },
  {
    id: 4,
    name: "mostafa",
    city: "Cairo",
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