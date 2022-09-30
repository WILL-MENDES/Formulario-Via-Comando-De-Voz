if (annyang) {
  
    var commands = {


        'nome *tag': function(opa) {
            let uname = document.getElementById("nome");
            uname.value = opa;
            

        },

        'profissão *tag': function(variable) {
            let uname = document.getElementById("profissão");
            uname.value = variable;
           

        },

        'nacionalidade *tag': function(variable) {
        if(variable) {console.log('deu')} 


            let uname = document.getElementById("nacionalidade");
            uname.value = variable;
            
            
        },

        'pronto *tag': function(variable) {
            let uname = document.getElementById("pronto");
            uname.value = variable;
            
            alert('Enviado com Sucesso');
        }
        
        }



    };

    // Add our commands to annyang
    annyang.addCommands(commands);

    // Start listening. You can call this here, or attach this call to an event, button, etc.
    annyang.start();


