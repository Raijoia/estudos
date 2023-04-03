
function getNotaDoAluno(notaDoAluno) {
    if (notaDoAluno >= 90) {
        console.log('Nota do aluno é A')
    } else if  (notaDoAluno >= 80 || notaDoAluno === 89) {
        console.log('Nota do aluno é B')
    } else if (notaDoAluno >= 70 || notaDoAluno === 79) {
        console.log('Nota do aluno é C')
    } else if (notaDoAluno >= 60 || notaDoAluno === 69) {
        console.log('Nota do aluno é D')
    } else if (notaDoAluno < 60) {
        console.log('Nota do aluno é F')
    }

    return notaDoAluno
}

console.log(getNotaDoAluno(70))