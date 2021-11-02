const renderSelectAndOptions = () => {
    const select = $('<select style="margin: 0.5rem;" name="skills" id="skillsSelect"></select>')
        .change(()=>skillChange());
    select.append('<option value="">Select Skills</option>')
    skills.map((skill)=>{
        select.append($(`<option value=${skill}>${skill}</option>`))
    })
}

const handleDeleteClick = (userId)=>{
    removeUser(userId);
    renderUsers()
    renderChart();
}

const renderSubmit = () =>{
    $('#submit').empty().append($(`<input onclick="onSave()" value="Save" type="submit">`));
}

const editClick = (userId) => {
    const obj = {
        firstName: $('#firstName').val(),
        lastName: $('#lastName').val(),
        age: $('#age').val(),
        skills: selectedSkills,
    }

    let valid = true;
    for (let i in obj){
        if (!obj[i].length){
            valid = false;
        }
    }

    if (!valid){
        $(`<p style="color: red">At least one input is empty</p>`)
            .appendTo($('#error'))
    }else {
        $('#error').empty();
        editUser(userId, obj);
        renderSubmit();
        selectedSkills = []
        $('#firstName').val('')
        $('#lastName').val('')
        $('#age').val('')
        renderSelectedSkills()
        renderUsers()
        renderChart()
    }
}

const handleEditClick = (event ,userId) => {
    const user = getUser(userId);
    $('.user').each(function () {
        $(this).css('border', '1px solid black')
    })
    $(event.target.parentElement.parentElement).css('border', '1px solid orange')
    $('#firstName').val(user.firstName);
    $('#lastName').val(user.lastName);
    $('#age').val(user.age);
    selectedSkills = user.skills;
    renderSelectedSkills();
    $('#submit').empty().append($(`<input value="Finish" type="submit">`).click(()=> editClick(userId)));
}

const renderUsers = () => {
    const users = getUsers();
    let usersSection = $('#users');
    usersSection.empty();
    $.map(users, (user)=>{
        const div = $('<div class="user" ' +
            'style="border: 1px solid; display: inline-block; margin: 0.5rem"></div>');
        const ul = $('<ul></ul>').addClass('ul');
        div.append(ul);
        const firstName = $(`<li>First Name: ${user.firstName}</li>`).addClass('li');
        ul.append(firstName)
        const lastName = $(`<li>Last Name: ${user.lastName}</li>`).addClass('li');
        ul.append(lastName)
        const age = $(`<li>Age: ${user.age}</li>`).addClass('li');
        ul.append(age)
        const skills = $(`<li><div style="display: inline-block; border: 1px solid; padding: 0.5rem" 
                              id="skills">Skills: 
            ${user.skills.map((skill)=>{
            return(
                `<button style="margin: 0.5rem">${skill}</button>`
            );
        })}</div></li>`).addClass('li');
        ul.append(skills)
        const buttonWrap = $(`<div style="margin: 0.5rem"></div>`)
        const edit = $(`<button style="margin: 0.5rem">Edit</button>`).click((e)=>handleEditClick(e, user.id));
        const del = $(`<button style="margin: 0.5rem">Delete</button>`).click(()=>handleDeleteClick(user.id));
        buttonWrap.append(edit);
        buttonWrap.append(del)
        div.append(buttonWrap);
        usersSection.append(div)
    })
}


const deleteSelectedSkill = (name) =>{
    selectedSkills = selectedSkills.filter(item => item !== name);
    renderSelectedSkills();
}


const renderSelectedSkills = () => {
    $('#selectedSkills').empty();
    $.map(selectedSkills,(selectedSkill)=>{
        $(`<button style="margin: 0.5rem">${selectedSkill} &#10060;</button>`)
            .click(()=>{deleteSelectedSkill(selectedSkill)})
            .appendTo($('#selectedSkills'));
    })
}

const onSave = () => {
    const obj = {
        firstName: $('#firstName').val(),
        lastName: $('#lastName').val(),
        age: $('#age').val(),
        skills: selectedSkills,
    }

    let valid = true;
    for (let i in obj){
        if (!obj[i].length){
            valid = false;
        }
    }

    if (!valid){
        $(`<p style="color: red">At least one input is empty</p>`)
            .appendTo($('#error'))
    }else {
        $('#error').empty();
        createUser(obj)
        selectedSkills = []
        $('#firstName').val('')
        $('#lastName').val('')
        $('#age').val('')
        renderSelectedSkills()
        renderUsers()
        renderChart()
    }
}

const skillChange = () =>  {
    let skillsInput = $('#skillsSelect')
    if (skillsInput.val()){
        selectedSkills.push(skillsInput.val());
        selectedSkills = removeDuplicate(selectedSkills);
        renderSelectedSkills();
    }
    skillsInput.val('')
}


renderSubmit();
renderUsers()
renderChart();