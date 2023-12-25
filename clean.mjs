import path from "path"
import fs from "fs"

const exclude = [
    "src", "clean.mjs", "package.json", "hacs.json", "LICENSE", "README.md", "node_modules", ".git"
]

const cleanFiles = (dir) => {
    if (!fs.statSync(dir).isDirectory()) {
        fs.unlinkSync(dir)
        return
    } 

    fs.readdirSync(dir).forEach((file) => {
        const filePath = path.join(dir, file)
        const stat = fs.statSync(filePath)
        if (stat.isDirectory()) {
            cleanFiles(filePath)
            fs.rmdirSync(filePath)
        } else {
            fs.unlinkSync(filePath)
        }
    })
}

fs.readdirSync(path.resolve()).filter(f => !exclude.includes(f)).forEach(f => {
    cleanFiles(path.resolve(f))
})



