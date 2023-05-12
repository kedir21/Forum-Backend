const express = require('express');
require('dotenv').config()
const cors = require('cors');
const app = express();
const port = process.env.PORT;
const userRouter = require('./server/api/users/user.router')
const questionRouter = require('./server/api/questions/question.router');
const answerRouter = require('./server/api/answers/answer.router');

app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use('/api/users', userRouter);
app.use("/api/questions", questionRouter);
app.use("/api/answer",answerRouter);



app.listen( port , () => {
    console.log(`server running at http://localhost:${port}`);
})



