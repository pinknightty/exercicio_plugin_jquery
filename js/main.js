$('#telefone').mask('(00) 00000-0000');

$('#cpf').mask('000.000.000-00', {reverse:true});

$('#cep').mask('000000-000');

$('form').validate({
    rules: {
            nome: {
                required: true,
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true,
            },
            cpf: {
                required: true,
            },
            endereco: {
                required: true,
            },
            cep: {
                required: true,
            }
        }
    })