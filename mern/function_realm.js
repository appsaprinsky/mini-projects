

 // FINCTION selectAllStudents

// This function is the endpoint's request handler.
exports = async function({ query, headers, body}, response) {
  
    const collection = context.services.get("mongodb-atlas").db("myFirstDatabase").collection("students");
    let studentsList = await collection.find();
  
    return  studentsList.toArray();
};




 // FINCTION studentDelete

exports = async function(payload, response) {
  
  const reviews = context.services.get("mongodb-atlas").db("myFirstDatabase").collection("students");
  const deleteResponse = await reviews.deleteOne({
    _id: BSON.ObjectId(payload.query.id)
  })

  return deleteResponse
    
};




 // FINCTION studentCreate

exports = async function(request, response) {

  if (request.body) {
      const bodyJson = JSON.parse(request.body.text());
      const reviews = context.services.get("mongodb-atlas").db("myFirstDatabase").collection("students");
      
      const reviewDoc = {
          regNo: bodyJson.regNo,
          studentName: bodyJson.studentName,
          grade: bodyJson.grade,
          section: bodyJson.section
      };
  
      return await reviews.insertOne(reviewDoc);
  }
  
  return  {"result": "hi"};
};













