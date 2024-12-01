// Objeto JSON

const doctores = [
    {
        nombre: "Lupita Lagartija",
        especialidad: "Ginecóloga",
        experiencia: 5,
        disponibildad: true,
        contacto: { "telefono": "2354376", "email": "lupita.lagartija@hospital.com" },
        horarios: ["Martes 8-13", "Jueves 14-18"], 
    },
    {
        nombre: "Diego Rigoberto",
        especialidad: "Médico general",
        experiencia: 20,
        disponibildad: false,
        contacto: { "telefono": "549769", "email": "diego.rigoberto@hospital.com" },
        horarios: ["Lunes 9-17", "Martes 20-21"], 
    }, 
    {
        nombre: "Margarita Crisálida",
        especialidad: "Nutricionista",
        experiencia: 4,
        disponibildad: true,
        contacto: { "telefono": "346098", "email": "margarita.crisalida@hospital.com" },
        horarios: ["Viernes 7-10", "Sábado 10-13"], 
    },
    {
        nombre: "Catalina Menteabierta",
        especialidad: "Psicóloga",
        experiencia: 8,
        disponibildad: true,
        contacto: { "telefono": "235683", "email": "catalina.menteabierta@hospital.com" },
        horarios: ["Martes 8-10", "Jueves 7-13"], 
    },
];

//Acceso a los Datos con Destructuring
const {
    nombre,
    especialidad,
    contacto: { email },
  } = doctores[2];
  

  
    console.log(
    `Doctor: ${nombre}, Especialidad: ${especialidad}, Email: ${email}`
  );
 //Mostrar objeto en interfaz
   // Escucha el evento DOMContentLoaded
   document.addEventListener("DOMContentLoaded", () => {
    // Selecciona el elemento
    const contenedor = document.getElementById("contenedor");

    // Crea un nuevo elemento
    const mensaje = document.createElement("p");
    mensaje.textContent = "El DOM está listo, y este mensaje se ha agregado dinámicamente.";

    // Agrega el nuevo elemento al contenedor
    contenedor.appendChild(mensaje);

    const divInfo = document.getElementById("doctores-info");
divInfo.innerHTML = `<h2>${nombre}</h2><p>Especialidad: ${especialidad}</p><p>Email: ${email}</p>`;

  });

const divInfo = document.getElementById("doctores-info");
divInfo.innerHTML = `<h2>${nombre}</h2><p>Especialidad: ${especialidad}</p><p>Email: ${email}</p>`;




 





