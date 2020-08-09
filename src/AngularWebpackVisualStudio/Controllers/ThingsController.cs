using System;
using System.Linq;
using System.Net;
using System.Net.Mail;
using AngularWebpackVisualStudio.Models;
using AngularWebpackVisualStudio.Repositories.Things;
using Microsoft.AspNetCore.JsonPatch;
using Microsoft.AspNetCore.Mvc;

namespace AngularWebpackVisualStudio.Controller
{
    [Route("api/[controller]")]
    public class ThingsController : Microsoft.AspNetCore.Mvc.Controller
    {

        public ThingsController()
        {

        }

        [HttpPost]
        public IActionResult SendEmail([FromBody] EmailData email)
        {
            if (email == null)
            {
                return BadRequest();
            }

            if (!ModelState.IsValid)
            {
                var errorList = ModelState.Values.Select(m => m.Errors).ToList();
                return BadRequest(errorList);
            }


            /*
             * Send the email via server smtp
             */
            try
            {
                var client = new SmtpClient("smtp.gmail.com", 587)
                {
                    Credentials = new NetworkCredential("benoit.bourgeon.info@gmail.com", "Azerty12345678!"),
                    EnableSsl = true
                };
                client.Send("benoit.bourgeon.info@gmail.com", "benoit.bourgeon.info@gmail.com", email.subject, "from: " + email.email + "    " + email.description);
                return Ok();
            }
            catch(Exception ex)
            {
                return BadRequest(ex.Message);
            }

        }
    }
}
