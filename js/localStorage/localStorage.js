class Users {

    constructor(){
        this.users = localStorage.getItem('users');
    }

    createUser(user){
        let lastId = 0;
        if(this.users){
            const newUsers = JSON.parse(this.users);
            lastId = newUsers[length-1].id;
            localStorage.setItem('users', JSON.stringify({...user, id: lastId}))
        }
    }

    getUser(id){
        if(this.users){
            const newUsers = JSON.parse(this.users);
            const user = newUsers.filter((value)=>{
                return value.id === id;
            })[0]
            return user;
        }
        return {};
    }

    getUsers(){
        if(this.users){
            return this.users;
        }
        return [];
    }

}