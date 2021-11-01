class Users {
    constructor(){
        this.users = localStorage.getItem('users');
    }

    update(){
        this.users = localStorage.getItem('users');
    }

    createUser(user){
        this.update();
        if(this.users){
            let newUsers = JSON.parse(this.users);
            const lastId = newUsers[newUsers.length-1].id;
            newUsers.push({...user, id: lastId + 1});
            localStorage.setItem('users', JSON.stringify(newUsers));
        }
        const arr = []
        const lastId = 0;
        arr.push({...user, id: lastId});
        localStorage.setItem('users', JSON.stringify(arr))
    }

    getUser(id){
        this.update();
        if(this.users){
            const newUsers = JSON.parse(this.users);
            const user = newUsers.filter((value)=>{
                return value.id == id;
            })
            if(user){
                return user[0]
            }
        }
        return {};
    }

    getUsers(){
        this.update();
        if(this.users){
            return this.users;
        }
        return [];
    }

    editUser(id, user){
        this.update();
        if(this.users){
            let newUsers = JSON.parse(this.users)
            newUsers = newUsers.map((useri)=>{
                if(useri.id == id){
                    return {...user, id}
                }
                return useri;
            })
            localStorage.setItem('users', JSON.stringify(newUsers))
        }
    }

    destroy(){
        localStorage.removeItem('users');
    }
}


let users = new Users();
users.createUser({firstName: 'ali', lastName: 'ali', age: '20', selectedSkills: ['html']})
users.createUser({firstName: 'ali2', lastName: 'ali2', age: '30', selectedSkills: ['html', 'css']})

console.log(users.getUsers())
