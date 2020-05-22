/*
Aqui van todas las funciones ayudantes comunes y que ejecutan acciones repetitivas
*/

module.exports = {

   async exists(model, where){
        if( typeof model == "object") {
            let exists =   await model.findOne(where)
            if(!exists){
                return {
                    existe:false,
                    error:false,
                    messaje:"Todo bien"
                };
            }

            return true
        }else {

            return  {
                existe:null,
                error:true,
                messaje:"El parametro model, debe ser un objeto"
            };

        }
      

    }

}