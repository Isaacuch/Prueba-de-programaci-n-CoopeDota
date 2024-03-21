//Se importan los espacios de nombres necearios para trabajar.
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using UserManagementAPI.Models;

//Definimos el controlador 
//se define el espacio de nombres y el alcance del controlador
namespace UserManagementAPI.Controllers    
{
    [ApiController]
    [Route("[controller]")]

    //Define la ruta base para este controlador, que se determinará dinamicamente como el nombre del controlador
    public class UsersController : ControllerBase
    {
        private static List<User> users = new List<User>();

        //El metodo get reponde las solicitudes HTTP get enviado todo los usuarios almacenados en la lista "Users"
        [HttpGet]
        public IEnumerable<User> Get()
        {
            return users;
        }
        //El metodo POST responde las solicitudes HTTP POST para agregar un nuevo usuario a la lista "Users"
        [HttpPost]
        public IActionResult Post(User user)
        {
            users.Add(user);
            return Ok();
        }
    }
}
