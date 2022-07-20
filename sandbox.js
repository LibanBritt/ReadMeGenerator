// node modules 
const inquirer  = require('inquire');
const fs = require('fs');

// inquirer to generate questions 

inquirer.prompt(

    [
            {
                type: 'input',
                message:"What's the project title?",
                name: "title",
                // Validate property to check that the user provided a value
                validate: (value)=>{ if(value){return true} else {return 'i need a value to continue'}}   
            },
            {
                type: 'input',
                message:'how do you install your app?',
                name:'installation',
                validate: (value)=>{ if(value){return true} else {return 'i need a value to continue'}}   
            },
            {
                type: 'input',
                message:'instruction to be follow?',
                name:'instructions',
                validate: (value)=>{ if(value){return true} else {return 'i need a value to continue'}}   
            },
            {
                type: 'input',
                message:'any credits',
                name:'installation',
                validate: (value)=>{ if(value){return true} else {return 'i need a value to continue'}}   
            },
            {
            type: 'input',
                message:'how do you use your app?',
                name:'installation',
                validate: (value)=>{ if(value){return true} else {return 'i need a value to continue'}}  
            },
            {
                // List of license 
            type: 'list',
                message:'What license did you use?',
                name:'installation',
                choices:['The MIT License', 'The GPL License','Apache license', 'GNU license', 'N/A'],
                validate: (value)=>{ if(value){return true} else {return 'i need a value to continue'}}   
            },
            {
                type: ' input',
                message: "Github username",
                name:'git',
                validate: (value)=>{ if(value){return true} else {return 'i need a value to continue'}}
            },
            {
                type:'input',
                message:'E-Mail:',
                name:"email",
                validate: (value)=>{ if(value){return true} else {return 'i need a value to continue'}}
            },
    ]
).then{({
    title,
    installation,
    intructions,
    credit, 
    license,
    git,
    linkedin,
    email,
    usage,
    contribution
})=>{
    // template to be used
    const template = `# ${title}

*[Instalation](#installation)
*[Usage](#usage)
*[contribution](#contribution)
* [Credits](#credits)
* [License] (#license)
# Installation
${installation}
##Usage
${usage}
## Contribution
${contribution}
## instructions
${intructions}
## Credits
${credit}
## License
${license}

# Contact
*Github: ${git}
*Linkedin: ${linkedin}
*E-mail :${email}
`
// Function to create readme using fs
createNewfile(title,template);
}}
// Creating createNewfile
function createNewfile(fileName, template){
// fs
fs.writeFile{`./${fileName.toLowerCase().split('').join('')}md`,data,(err)=>{
    if(err){
        console.log(err)
    }
    console.log('Your README has been generated')
}}
}

// LETS GOO 