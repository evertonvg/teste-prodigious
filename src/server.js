import {Server,Model} from 'miragejs'

export function makeServer({enviroment = 'development'}={}){
    let server = new Server({
        enviroment,
        models:{
            contact:Model,
        },
        // seeds(server){
        //     server.create("contact",{name:'Teste',phone:'(53)55555-5555',email:'teste@teste.com.br',message:'ola mundo'})
        //     server.create("contact",{name:'Teste',phone:'(53)55555-5555',email:'teste@teste.com.br',message:'ola mundo'})
        // },
        routes() {
            this.namespace = "api"
      
            this.get("/contacts", (schema) => {
              return schema.contacts.all()
            })
            this.post("/contacts", (schema,request) => {
                let attrs = JSON.parse(request.requestBody)
                server.create("contact",{name:attrs.name,phone:attrs.phone,email:attrs.email,message:attrs.message})
                return schema.contacts.all()
            })
        },
    })

    return server 
}


    
