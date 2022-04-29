// MILESTONE 1:
// stampare su console le informazioni di nome, ruolo e la stringa della foto

// MILESTONE 2:
// stampare le stesse informazioni su DOM sottoforma di stringhe



const team = [
    {
      name: 'Wayne Barnett',
      role: 'Founder & CEO',
      image: 'wayne-barnett-founder-ceo.jpg',
    },
    {
      name: 'Angela Caroll',
      role: 'Chief Editor',
      image: 'angela-caroll-chief-editor.jpg',
    },
    {
      name: 'Walter Gordon',
      role: 'Office Manager',
      image: 'walter-gordon-office-manager.jpg',
    },
    {
      name: 'Angela Lopez',
      role: 'Social Media Manager',
      image: 'angela-lopez-social-media-manager.jpg',
    },
    {
      name: 'Scott Estrada',
      role: 'Developer',
      image: 'scott-estrada-developer.jpg',
    },
    {
      name: 'Barbara Ramos',
      role: 'Graphic Designer',
      image: 'barbara-ramos-graphic-designer.jpg',
    },
];

  
for (let key in team) {
    const teamInfo =(team, team[key])
    // console.log(teamInfo);
}

for (let index = 0; index < team.length; index++) {
    
    const teamMemberName = team [index] .name
    console.log(teamMemberName);
    
    const teamMemberRole = team [index] .role
    console.log(teamMemberRole);
    
    const teamMemberImage = team [index] .image
    console.log(teamMemberImage);
    
    // console.log("result --> ", teamMemberName, teamMemberRole, teamMemberImage)
    
  
       
    
    for (let key in team) {
        
        const newDomElement = document.querySelector("h2")
        console.log(newDomElement);
    
        newDomElement.innerHTML = `${teamMemberName} ${teamMemberRole} ${teamMemberImage}`

    }      
  

    
    
}

