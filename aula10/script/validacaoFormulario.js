export function validarFormulario(nome,email,senha,confirmarSenha){
    const criterioSenha = [ 
        /[a-z]/,     // Pelo menos uma letra minúscula
        /[A-Z]/,     // Pelo menos uma letra maiúscula
        /\d/,        // Pelo menos um dígito numérico
        /[\W_]/      // Pelo menos um caractere especial (incluindo underscore)
    ];

    if ( !nome || !senha || !email || !confirmarSenha){
        return {valido: false, mensagem: 'Todos os campos são Obrigatorios.'}
    }
    if(senha.length < 8 ){
        return {valido: false, mensagem: 'A senha deve conter no minimo 8 caracteres'}
     }
    
    for (const criterio of criterioSenha) {
        if (!criterio.test(senha)){
            return{valido: false , mensagem:'A senha deve conter pelo menos uma letra minuscula,uma maiuscula, um numero e um caracter especial'}
        }
    }
    if (senha !== confirmarSenha ) {
        return {valido:false , mensagem:'As senhas não são iguais'}
    }
    return {valido:true , mensagem:''}
}