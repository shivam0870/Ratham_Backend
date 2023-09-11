const Student = require('../models/student');
const { generateToken } = require('../utils/auth');

app.post('/student/login', async (req, res) => {
    const { universityId, password } = req.body;
    
  
    const student = await Student.findOne({ universityId, password });
    
    if (!student) {
      return res.status(401).json({ message: 'Authentication failed' });
    }
  

    const token = generateUUID();
    

    student.token = token;
    await student.save();
    
    return res.status(200).json({ token });
  });
  
  function generateUUID() {
    
  }

  
  app.get('/student/free-sessions', async (req, res) => {
  
    const studentToken = req.headers.authorization;
  
    const student = await Student.findOne({ token: studentToken });
  
    if (!student) {
      return res.status(401).json({ message: 'Authentication failed' });
    }
  
    
  });

  

  app.post('/student/book-session', async (req, res) => {
  
    const studentToken = req.headers.authorization;
  
    const student = await Student.findOne({ token: studentToken });
  
    if (!student) {
      return res.status(401).json({ message: 'Authentication failed' });
    }
  
 
  });
  