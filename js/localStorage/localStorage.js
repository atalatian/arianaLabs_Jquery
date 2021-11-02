const getUsers = () => {
    let users = localStorage.getItem('users');
    if(users){
        return JSON.parse(users);
    }
    return [];
}

const getUser = (id) => {
    const users = localStorage.getItem('users');
    if(users){
        const newUsers = JSON.parse(users);
        const user = newUsers.filter((value)=>{
            return value.id == id;
        })
        if(user){
            return user[0]
        }
    }
    return {};
}

const createUser = (user) => {
    const users = localStorage.getItem('users');
    if(users){
        let newUsers = JSON.parse(users);
        const lastId = newUsers[newUsers.length-1].id;
        newUsers.push({...user, id: lastId + 1});
        localStorage.setItem('users', JSON.stringify(newUsers));
    }else {
        const arr = []
        const lastId = 0;
        arr.push({...user, id: lastId});
        localStorage.setItem('users', JSON.stringify(arr))
    }
}

const editUser = (id, user) => {
    const users = localStorage.getItem('users');
    if(users){
        let newUsers = JSON.parse(users)
        newUsers = newUsers.map((userI)=>{
            if(userI.id == id){
                return {...user, id}
            }
            return userI;
        })
        localStorage.setItem('users', JSON.stringify(newUsers))
    }
}

const removeUser = (id) => {
    const users = localStorage.getItem('users');
    if(users){
        let newUsers = JSON.parse(users)
        newUsers = newUsers.filter((value)=>{
            return value.id !== id;
        })
        localStorage.setItem('users', JSON.stringify(newUsers))
    }
}



const filterBySkill = () => {
    const users = localStorage.getItem('users');
    if(users){
        let newUsers = JSON.parse(users);
        return unSelectedSkills.map((skill) => {
            const count = newUsers.filter((value) => {
                return value.skills.includes(skill);
            }).length;
            return [skill, count];
        });
    }
}

const destroy = () => {
    localStorage.removeItem('users');
}
