import {useState} from 'react';
const image = require('./vk.png')
const Form = () => {
    let participants = [
        {
            name: 'Samat',
            email: 'tmtmoneychange@gmail.com'
        },
        {
            name: 'Aya',
            email: 'aya_ermekova@mail.ru'
        },
        {
            name: 'Jons',
            email: 'janseriiktbb@gmail.com'
        },
        {
            name: 'Olzhas',
            email: 'o.otep@mail.ru'
        },
        {
            name: 'Exe',
            email: 'alimjan.prom@gmail.com'
        }
    ]


    let names = ['Olzhas', 'Aya', 'Exe', 'Samat', 'Jons']
    let selected = []
    let selectedNames = []

    const final = []
    const handleClick = () => {
         while (participants.length!=0){
             let randomIndex2 = Math.floor(Math.random()*names.length)
             let randomName = names[randomIndex2]
            const randomIndex1 = Math.floor(Math.random()*participants.length)
            const randomParticipant1 = participants[randomIndex1]

             if(randomParticipant1.name !== randomName){
                 participants.splice(randomIndex1, 1)
                 selected.push(randomParticipant1)
                 names.splice(randomIndex2, 1)
                 selectedNames.push(randomName)

                 final.push({
                     sender: randomParticipant1.email,
                     toWhom: randomName
                 })
             }

             else{
                 names = ['Olzhas', 'Aya', 'Exe', 'Samat', 'Jons']
                 selected.length = 0
                 selectedNames.length = 0
                 participants = [
                     {
                         name: 'Samat',
                         email: 'tmtmoneychange@gmail.com'
                     },
                     {
                         name: 'Aya',
                         email: 'aya_ermekova@mail.ru'
                     },
                     {
                         name: 'Jons',
                         email: 'janseriiktbb@gmail.com'
                     },
                     {
                         name: 'Olzhas',
                         email: 'o.otep@mail.ru'
                     },
                     {
                         name: 'Exe',
                         email: 'alimjan.prom@gmail.com'
                     }
                 ]
                 final.length = 0
                 console.log('-----------')
                 handleClick()
                 break
             }

             console.log('Отправить:' + randomParticipant1.email)
             console.log('Подарок Кому:' + randomName)

        }


    }
    console.log(final)

    const handleSend = () => {

        final.forEach(element => {
            console.log(element.sender)
            console.log(element.toWhom)
            const config = {
                SecureToken: '790136fb-5471-4180-a461-74fb4f95eeaf',
                To : element.sender.toString(),
                From : "olzhasktl362@gmail.com",
                Subject : "Secret Santa!!!",
                Body : `<b>Happy New Year!</b><br>
                        You are Secret Santa for <b><i> ${element.toWhom.toString()} <i></b><br />
                        I hope you are doing well! Good Luck!<br />
                       `
            }

            if(window.Email) {
                window.Email.send(config)
            }
        })
    }

    const handleSendTest = () => {
        const config = {
            Host : "smtp.elasticemail.com",
            Username : "olzhasktl362@gmail.com",
            Password : "EBD0DFBCAFA8CF4883323BE4594AA570505D",
            To : 'o.otep@mail.ru',
            From : "olzhasktl362@gmail.com",
            Subject : "Secret Santa!!!",
            Body : `<b>Happy New Year!</b><br>
                        You are Secret Santa for <b><i> Aya <i></b><br />
                        I hope you are doing well! Good Luck!<br />
                       `
        }

        if(window.Email) {
            window.Email.send(config)
        }
    }


    return (
        <div>
            <button onClick={handleClick}>Click Me</button>
            <button onClick={handleSend}>Send Messages</button>
        </div>



    );
};

export default Form;