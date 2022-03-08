var express = require('express');
var nodemailer=require('nodemailer');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('contact', { title: 'Home' });
});

/* Post request for contact*/
router.post('/send',function(req,res,next){
  
  let transporter=nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: 'zokme00@gmail.com',
      pass: 'z0kme 00 g00gle.com',
    }
  });

  const mailOptions={
    from: 'John Doe <johndoe@outlook.com>',
    to: 'zokme00@gmail.com',
    subject: 'Website Submition',
    text: 'You have a new submtion with the followind details... Name: '+req.body.name+' Email : '+req.body.email+'Message :'+req.body.message,
    html:'<h2>New Submission</h2><ul><li> Name: '+req.body.name+'</li><li> Email : '+req.body.email+'</li><li> Message : '+req.body.message+'</li></ul>'
  }

  transporter.sendMail(mailOptions,function(err,info){
    if(err){
      console.log(err);
    }else{
       console.log('Notification Sended : '+info.response);
       res.redirect('/');
    }
  });


});

/*
  var transporter=nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'zokme00@gmail.com',
      password: 'password',
    }
  });

  var mailoptions={
    from:'Oscript <0script@gamil.com>',
    to: 'techguyinfo@gmail.com',
    subject:'Website Submition',
    text: 'You have a new submition from Name : '+req.body.name+' Email : '+req.body.email,
    message: req.body.message,
    html:'<p>You got a new submission with the following detail : </p>'+'<ul><li> Name :'+req.body.name+'</li><li> Email : '+req.body.email+'</li><li> Message : '+req.body.message+'</li></ul>',
  }

  transporter.sendMail(mailoptions,function(error,info){
    if(error){
      console.log('error');
    }else{
      console.log('Message Sent : '+info.response);
      res.redirect('/');
    }
  });


*/

module.exports = router;
