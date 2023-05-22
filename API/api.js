console.log('load title here')

const testUrl = 'testURL';
// add try catch
try {
    fetch(testUrl).then((data)=>{
        console.log(data.title)
    }) 
} catch (error) {
    console.log(error)
}
