const fs = require ('fs')

// add data


const addperson = (id,fname,lname,age,city) => {
    const allData = loadInfo()
    const duplicateData = allData.filter ((obj) => {
        return obj.id === id
    })
    if (duplicateData.length == 0 ) {
        allData.push({
            id:id,
            fname:fname,
            lname:lname,
            age:age,
            city:city,
        })
        saveallData (allData)    
    } else {
        console.log("Erorr")
    }
   
}

const loadInfo = () => {
    try {
        const dataJson = fs.readFileSync("data5.Json").toString()
        return JSON.parse(dataJson)
    } catch {
        return []
    }
}
const saveallData = (allData) => {
    const saveallDataJson = JSON.stringify(allData)
    fs.writeFileSync("data5.Json",saveallDataJson)
}



// delete data 


const deletedData = (id) => {
    const allData = loadInfo()
    const dataToKeep = allData.filter((obj) => {
        return obj.id !== id
    })
    saveallData(dataToKeep)
    console.log("successfully deleted the item")
}

// read data



const readData = (id) => {
    const allData = loadInfo()
    const itemNeeded = allData.find((obj) => {
        return obj.id == id
    })  
    console.log(itemNeeded)    
    if (itemNeeded){
        console.log(itemNeeded.id)
    } else {
        console.log(" id needed not found")
    }
}

 
// list data



const listData = () => {
    const allData = loadInfo()
   allData.forEach((obj) => {
    console.log(obj.fname, obj.age, obj.city)
   })
}


// exports


module.exports = { 
    addperson,
    deletedData,
    readData,
    listData
}