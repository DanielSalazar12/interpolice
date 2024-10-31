let api = "http://localhost:4102/api/ciudadano/";
let contenido = document.querySelector("#contenido");

function listartodos() {
  fetch(api + "listartodos")
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      /*  for (let index = 0; index < res.aprendiz.length; index++) {         
       contenido.innerHTML +=   `${res.aprendiz[index].nombre} ${res.aprendiz[index].apellido} <br>`     
      }
   
      res.aprendiz.map((aprendiz)=>{
        contenido.innerHTML +=   `${aprendiz.nombre} ${aprendiz.apellido} <br>`   
      }) */
      res.ciudadano.forEach((ciudadano) => {
        let fila = `<tr> 
          <td>${ciudadano.id}</td> 
          <td>${ciudadano.nombre}</td> 
          <td>${ciudadano.apellidos}</td> 
          <td>${ciudadano.apodo}</td>
          <td>${ciudadano.email}</td>
          <td>${ciudadano.foto}</td>
          <td>${ciudadano.fechanace.slice(0, 10)}</td>
          <td>${ciudadano.cat_Nombre}</td>
         <td><button class="btnBorrar btn btn-danger"><i class="bi bi-trash"></i></button></td>
         <td><button class="btnEditar btn btn-secondary"><i class="bi bi-pencil-square"></i></button></td>
  
        </tr>`;
        contenido.innerHTML += fila;
      });
    });
}
listartodos();
