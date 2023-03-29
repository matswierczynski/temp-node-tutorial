const {readFile, writeFile} = require('fs')
console.log('start')
readFile('./content/first.txt', 'utf8', (err, res) => {
    if (err) {
        console.log(err);
        return;
    }
    const first = res;
    readFile('./content/second.txt', 'utf8', (err, result) => {
        if (err) {
            console.log(err);
            return;
        }
        writeFile(
            './content/result-async.txt',
            `Here is the result : ${first}, ${result}`, (err, result) => {
                if (err) {
                    console.log(err);
                    return;
                }
                console.log('done')
            })
    })
})
console.log('starting next task')