function createFrame(names) {
    let buffer = ''
    
    names.sort((a, b) => a.length - b.length)
    let CantMarco = ''
    let namesConten = ''
    let espacioMarco = ''
    
    for (let i = 0; i < names.length; i++) {
        espacioMarco = ' '.repeat(names[i].length) + '*';
        namesConten += `* ${names[i]}\n`
        CantMarco = '*'.repeat(names[i].length + 4)
        // buffer += `${marco}${namesConten}${marco}`
    }

    buffer += `${CantMarco}\n${namesConten}${CantMarco}`

    console.log(buffer)

}

createFrame(['Vasya', 'Petyasdf', 'Mas'])
