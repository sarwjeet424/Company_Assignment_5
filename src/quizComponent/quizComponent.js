import {useState} from'react';
import './quizComponent.css'

const QuizComp =()=>{
    var Questions=[
        {
            Ques:"What is the capital city of Uttar Pradesh",
            Answers:[
                {Ans:"Delhi",iscorrect:false},
                {Ans:"Pune",iscorrect:false},
                {Ans:"Lucknow",iscorrect:true},
                {Ans:"chennai",iscorrect:false}
            ]
        },
        {
            Ques:"Who is the President of USA",
            Answers:[
                {Ans:"Donald Trump",iscorrect:false},
                {Ans:"Joe Biden",iscorrect:true},
                {Ans:"Putin",iscorrect:false},
                {Ans:"Xi Jinping",iscorrect:false}
            ]
        },
        {
            Ques:"Who is the Prime Minister of India",
            Answers:[
                {Ans:"Amit Shan",iscorrect:false},
                {Ans:"Narendra Modi",iscorrect:true},
                {Ans:"Manmohan Singh",iscorrect:false},
                {Ans:"Indira Gandhi",iscorrect:false}
            ]
        },
        {
            Ques:"Sum of the numbers 22+55 = ?",
            Answers:[
                {Ans:"44",iscorrect:false},
                {Ans:"33",iscorrect:false},
                {Ans:"66",iscorrect:false},
                {Ans:"77",iscorrect:true}
            ]
        },
        {
            Ques:"which is the longest river in the World",
            Answers:[
                {Ans:"Amazon",iscorrect:false},
                {Ans:"Nile",iscorrect:true},
                {Ans:"Ganga",iscorrect:false},
                {Ans:"Mekong River",iscorrect:false}
            ]
        },
        {
            Ques:"What planet is closest to the sun",
            Answers:[
                {Ans:"Jupiter",iscorrect:false},
                {Ans:"Venus",iscorrect:false},
                {Ans:"Mercury",iscorrect:true},
                {Ans:"Saturn",iscorrect:false}
            ]
        },
        {
            Ques:"What country has the most islands",
            Answers:[
                {Ans:"Denmark",iscorrect:false},
                {Ans:"Sweden",iscorrect:true},
                {Ans:"Germany",iscorrect:false},
                {Ans:"Cape Town",iscorrect:false}
            ]
        },
        {
            Ques:"which is the longest river in the India",
            Answers:[
                {Ans:"Brahmaputra",iscorrect:false},
                {Ans:"Yamuna",iscorrect:false},
                {Ans:"Ganga",iscorrect:false},
                {Ans:"Indus River",iscorrect:true}
            ]
        },
        {
            Ques:"What colors is the flag of the United Nations",
            Answers:[
                {Ans:"Blue and Green",iscorrect:false},
                {Ans:"Blue and Yellow",iscorrect:false},
                {Ans:"Red and Blue",iscorrect:false},
                {Ans:"Blue and White",iscorrect:true}
            ]
        },
        {
            Ques:"What is the capital of Canada",
            Answers:[
                {Ans:"Lekawa",iscorrect:false},
                {Ans:"Rata",iscorrect:false},
                {Ans:"Ottawa",iscorrect:true},
                {Ans:"Shewa",iscorrect:false}
            ]
        }
    ]
    
    const [currentQues, setCurrentQues] = useState(0)
    const [score, setScore] = useState(0)
    const [showScore, setShowScore] = useState(false)

    const handleAnswerResponse=(iscorrect)=>{

        if(iscorrect){
            setScore(score+1)
        }
        const nextQues = currentQues+1
        if(nextQues<Questions.length){
            setCurrentQues(nextQues)
        }else{
            setShowScore(true)
        }

    }

    const ResetQuiz=()=>{
        setCurrentQues(0)
        setScore(0)
        setShowScore(false)
    }

 return (
    <div className='app'>
        {showScore?(
           <div className='score-section'>
                 You have scored {score} out of {Questions.length}
                 <>
                 <button type='submit' onClick={()=>{ResetQuiz()}}>Play Again !!</button>
                 </>
           </div>
        ):(
            <>
            <div className='question-section'>
                 <div className='question-count'>
                   <span>{currentQues+1}/{Questions.length}</span>
                 </div>
                 <div className='question-text'>
                    {Questions[currentQues].Ques}
                 </div>
            </div>
             
             <div className='answer-section'>
                {Questions[currentQues].Answers.map((answer)=>(
                    <button key={answer.Ans} onClick={()=>handleAnswerResponse(answer.iscorrect)}>{answer.Ans}</button>
                ))}
             </div>
            </>
        )
        }
    </div>
 )
}

export default QuizComp