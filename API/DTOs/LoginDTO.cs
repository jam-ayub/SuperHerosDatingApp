using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace API.DTOs
{
    public class LoginDTO
    {
        [Required (ErrorMessage = "User Name is required")]
        public string UserName { get; set; }

        [Required (ErrorMessage = "User Password is required")]
        public string Password { get; set; }
    }
}