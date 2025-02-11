import {Server,Model} from 'miragejs'

export function makeServer({enviroment = 'development'}={}){
    let server = new Server({
        enviroment,
        models:{
            contact:Model,
            client:Model
        },
        seeds(server){
            server.create("client",{name:'Renault Sport',photo:'photo1.png',category:'cars',color:'#781e5a',description:'Nullam bibendum ante a luctus facilisis. Proin cursus sapien et orci sollicitudin commodo. Duis quis tortor et quam tincidunt semper. Nam ut sagittis felis. Vestibulum tincidunt nisl sit amet imperdiet iaculis. Quisque tempor augue eget ante tincidunt fermentum. Donec finibus finibus .'})
            server.create("client",{name:'Toyota GT86 Special Edition ',photo:'photo2.png',category:'cars',color:'#f6871f',description:'Nullam bibendum ante a luctus facilisis. Proin cursus sapien et orci sollicitudin commodo. Duis quis tortor et quam tincidunt semper. Nam ut sagittis felis. Vestibulum tincidunt nisl sit amet imperdiet iaculis. Quisque tempor augue eget ante tincidunt fermentum.'})
            server.create("client",{name:'Nescafé',photo:'photo3.png',category:'food',color:'#547427',description:'Nullam bibendum ante a luctus facilisis. Proin cursus sapien et orci sollicitudin commodo. Duis quis tortor et quam tincidunt semper. Nam ut sagittis felis. Vestibulum tincidunt nisl sit amet imperdiet iaculis. Quisque tempor augue eget ante tincidunt fermentum. , per inceptos himenaeos. Vivamus quis leo nec elit posuere cursus eu quis dolor. .'})
            server.create("client",{name:'McDonald’s',photo:'photo4.png',category:'food',color:'#8c1c24',description:'Nullam bibendum ante a luctus facilisis. Proin cursus sapien et orci sollicitudin commodo. Duis quis tortor et quam tincidunt semper. Nam ut sagittis felis. Vestibulum tincidunt nisl sit amet imperdiet iaculis. Quisque tempor augue eget ante  nostra, per inceptos himenaeos. Vivamus quis leo nec elit posuere cursus eu quis dolor. Donec pulvinar, dolor ac venenatis scelerisque tincidunt nec non neque. Nam sit amet justo commodo, venenatis erat eu, elementum elit.'})
            server.create("client",{name:'Cadillac',photo:'photo5.png',category:'cars',color:'#11b6e0',description:'Nullam bibendum ante a luctus facilisis. Proin cursus sapien et orci sollicitudin commodo. Duis quis tortor et quam tincidunt semper. Nam ut sagittis felis. Vestibulum tincidunt nisl sit amet imperdiet iaculis. Quisque tempor augue eget ante t.'})
            server.create("client",{name:'GMC',photo:'photo6.png',category:'cars',color:'#781e5a',description:'Nullam bibendum ante a luctus facilisis. Proin cursus sapien et orci sollicitudin commodo. Duis quis tortor et quam tincidunt  finibus lacinia. Fusce condimentum vehicula felis eu dapibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus quis leo nec elit posuere cursus eu quis dolor. Donec pulvinar, dolor ac venenatis scelerisque.'})
            server.create("client",{name:'George Weston Foods',photo:'photo7.png',category:'food',color:'#f6871f',description:'Nullam bibendum ante a luctus facilisis. Proin cursus sapien et orci sollicitudin commodo. Duis quis tortor .  inceptos himenaeos. Vivamus quis leo nec elit posuere cursus eu quis dolor. Donec pulvinarlit.'})
            server.create("client",{name:'Dacia',photo:'photo8.png',category:'food',color:'#f6871f',description:'Nullam bibendum ante a luctus facilisis. Proin cursus sapien et orci sollicitudin commodo.'})
            server.create("client",{name:'Falabella',photo:'photo9.png',category:'clothes',color:'#781e5a',description:'Nullam bibendum ante a luctus facilisis. Proin cursus sapien et orci sollicitudin.'})
            server.create("client",{name:'Sony Asia',photo:'photo10.png',category:'electronics',color:'#11b6e0',description:'Nullam bibendum ante a luctus facilisis. Proin cursus sapien et orci .'})
        },
        routes() {
            this.namespace = "/api"

            this.get("/portifolio", function(schema) {
                return schema.clients.all()
            })
      
            this.get("/contacts", function(schema)  {
              return schema.contacts.all()
            })
            this.post("/contacts", function(schema,request) {
                let attrs = JSON.parse(request.requestBody)
                server.create("contact",{name:attrs.name,phone:attrs.phone,email:attrs.email,message:attrs.message})
                return schema.contacts.all()
            })
        },
    })

    return server 
}


    
