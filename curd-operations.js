
db.createCollection("academicRecords", {
    validator: {
       $jsonSchema: {
          bsonType: "object",
          required: ["studentId", "name", "grades", "subjects"],
          properties: {
             studentId: {
                bsonType: "string",
                description: "Student ID"
             },
             name: {
                bsonType: "string",
                description: "Student name"
             },
             grades: {
                bsonType: "array",
                items: {
                   bsonType: "object",
                   required: ["grade", "subject"],
                   properties: {
                      grade: {
                         bsonType: "string",
                         description: "Grade for a subject"
                      },
                      subject: {
                         bsonType: "string",
                         description: "Subject name"
                      }
                   }
                }
             }
          }
       }
    }
 });

 db.createCollection("coCurricularActivities", {
    validator: {
       $jsonSchema: {
          bsonType: "object",
          required: ["studentId", "name", "activityType", "duration", "achievements"],
          properties: {
             studentId: {
                bsonType: "string",
                description: "Student ID"
             },
             name: {
                bsonType: "string",
                description: "Student name"
             },
             activityType: {
                bsonType: "string",
                description: "Activity type"
             },
             duration: {
                bsonType: "string",
                description: "Activity duration"
             },
             achievements: {
                bsonType: "array",
                items: {
                   bsonType: "object",
                   properties: {
                      title: {
                         bsonType: "string",
                         description: "Achievement title"
                      },
                      description: {
                         bsonType: "string",
                         description: "Achievement description"
                      }
                   }
                }
             }
          }
       }
    }
 });

 db.academicRecords.insertMany([
    {
       studentId: "1",
       name: "Prajwal Apchundekar",
       grades: [
          { grade: "A", subject: "Math" },
          { grade: "B", subject: "English" },
          { grade: "C", subject: "Science" }
       ]
    },
    {
       studentId: "2",
       name: "Aditya Dilapke",
       grades: [
          { grade: "A", subject: "Math" },
          { grade: "A", subject: "English" },
          { grade: "C", subject: "Science" }
       ]
    }
 ]);
 
 // it is for Sample curricular activities

 db.coCurricularActivities.insertMany([
    {
       studentId: "1",
       name: "Prajwal Apchundekar",
       activityType: "Sports",
       duration: "2 years",
       achievements: [
          { title: "Champion", description: "Won the school sports-competition" },
          { title: "MVP", description: "Awarded Most Valuable Player" }
       ]
    },
    {
       studentId: "2",
       name: "Aditya Dilpake",
       activityType: "Music",
       duration: "3 years",
       achievements: [
          { title: "1st Place", description: "Won the school music competition" },
          { title: "Best Performer", description: "Awarded Best Performer" }
       ]
    }
 ]);

 // For Read operation
db.academicRecords.find().pretty();
db.coCurricularActivities.find().pretty();

// For Update operation
db.academicRecords.updateOne(
   { studentId: "1" },
   { $set: { "grades.0.grade": "A+" } }
);

// For Delete operation
db.academicRecords.deleteOne({ studentId: "2" });