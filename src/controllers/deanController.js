const Dean = require('../models/dean');
const { generateToken } = require('../utils/auth');


app.post('/dean/login', async (req, res) => {
    const { universityId, password } = req.body;
  
    const dean = await Dean.findOne({ universityId, password });
    
    if (!dean) {
      return res.status(401).json({ message: 'Authentication failed' });
    }
  
   
    const token = generateUUID();
    
   
    dean.token = token;
    await dean.save();
    
    return res.status(200).json({ token });
  });

  
  app.get('/dean/pending-sessions', async (req, res) => {
    
    const deanToken = req.headers.authorization;
  
    const dean = await Dean.findOne({ token: deanToken });
  
    if (!dean) {
      return res.status(401).json({ message: 'Authentication failed' });
    }
  
    // Fetch pending sessions for the dean
    // Implement this logic to retrieve pending sessions
  });

  

