using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace API.DTOs
{
    public class RegisterDTO
    {
        [Required (ErrorMessage = "User Name is required")]
        public string UserName { get; set; }

        [Required (ErrorMessage = "User Password is required")]
        [StringLength(8, MinimumLength = 4)]
        public string Password { get; set; }
    }
}