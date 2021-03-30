URL = "https://my-todo-project-7faaa-default-rtdb.firebaseio.com/List.json";

export const updateDataBase = () => {
    const data = fetch(URL)
        .then(responce => {
            return responce.json()
        }).then(data => {          
        if(data !== 0) {
            return data
        }else{
            return [];
        }       
        })
        .catch(err => {
            return err
        })
    return data; 
}

export const saveData = (addtodolist) => {
    const response = fetch(URL, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(addtodolist)
    }).then(response => {
        return response      
    }).catch(err => {
        return err;
    });   
    return response;    
}

