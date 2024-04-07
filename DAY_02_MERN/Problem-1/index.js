const fs = require('fs').promises;

async function readFilesAsync(filePaths) {
    const filesData = [];

    for (const filePath of filePaths) {
        try {
            const data = await fs.readFile(filePath, 'utf8');
            filesData.push({ filePath, data });
        } catch (err) {
            console.log(err) // Handle errors here or propagate them
        }
    }

    console.log(filesData) ;
}

// Example usage
const files = ['./file1.txt', './file2.txt', './file3.txt'];

readFilesAsync(files)
    
