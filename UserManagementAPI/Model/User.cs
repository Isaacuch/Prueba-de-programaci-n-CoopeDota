using System.ComponentModel.DataAnnotations;

//Definimos el modelo "User"
//Definir el espacio de nombres y el alcance del modulo
namespace UserManagementAPI.Models
{
    public class User
    {
        //Definir los datos que vamos a implementar o almacenar en el usuario
        //El id del usuario
        [Key]
        public int Id { get; set; }

        //El Username del usuario
        [Required]
        public string Username { get; set; }

        //El Email del usuario
        [Required]
        [EmailAddress]
        public string Email { get; set; }
    }
}
