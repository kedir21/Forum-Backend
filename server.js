const express = require('express');
require('dotenv').config()
const cors = require('cors');
const app = express();
const port = process.env.PORT || 80;
const userRouter = require('./server/api/users/user.router')
const questionRouter = require('./server/api/questions/question.router');
const answerRouter = require('./server/api/answers/answer.router');

app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use('/api/users', userRouter);
app.use("/api/questions", questionRouter);
app.use("/api/answer",answerRouter);



app.listen( port ,"0.0.0.0", () => {
    console.log(`server running at http://localhost:${port}`);
})



