const deleteSelectedSkill = (name) =>{
    selectedSkills = selectedSkills.filter(item => item !== name);
    renderSelectedSkills();
}


const renderSelectedSkills = () => {
    $('#selectedSkills').empty();
    $.map(selectedSkills,(selectedSkill, index)=>{
        $(`<li><button data-id=${index}>${selectedSkill} &#10060;</button></li>`)
            .click(()=>{deleteSelectedSkill(selectedSkill)})
            .appendTo($('#selectedSkills'));
    })
}

const onSave = () => {
    const firstName = $('#firstName').val();
    const lastName = $('#lastName').val();
    const age = $('#age').val();
    console.log(firstName, lastName, age, selectedSkills);
}

const skillChange = () =>  {
    selectedSkills.push($('#skills').val());
    selectedSkills = removeDuplicate(selectedSkills);
    renderSelectedSkills();
}