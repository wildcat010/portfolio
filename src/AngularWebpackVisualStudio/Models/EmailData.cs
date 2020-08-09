using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace AngularWebpackVisualStudio.Models
{
    public class EmailData
    {
        [Required(ErrorMessage = "Please enter a subject")]
        public string subject { get; set; }
        [Required(ErrorMessage = "Please enter a description")]
        public string description { get; set; }
        [EmailAddress(ErrorMessage = "The Email Address is not valid")]
        [Required(ErrorMessage = "Please enter an email address")]
        public string email { get; set; }
    }
}
