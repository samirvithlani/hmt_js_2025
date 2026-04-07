
const generateQuestions = ()=>{

    const promise = new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(["que1","que2","que3","que4","que5"])
        }, 3000);
    })
    return promise
}

const generatePaper = (questions)=>{
    const promise = new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve({questions:questions,marks:50})
        }, 2000);
    })
    return promise
}





const exam = async()=>{

        console.log("exam started...")
        console.log("generating questions...")
        const questions =  await generateQuestions()
        console.log("questions..",questions)
        console.log("generating paper..")
        const paper = await generatePaper(questions)
        console.log(paper)

}
exam()