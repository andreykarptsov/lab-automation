console.log('load title here')

const testUrl = 'testURL';
fetch(testUrl).then((data)=>{
    console.log(data.title)
}).catch((err)=>{
    console.error(err)
})