using CAM.Data.DataModels;
using CAM.Data.Services;
using CAM.Models;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;
using System.Threading.Tasks;

namespace CAM.Controllers
{
    [Route("api/[controller]")]
    public class HomeController : Controller
    {
        private readonly CAMDataContext _context;
        public HomeController(CAMDataContext context)
        {
            _context = context;
        }
      

        public IActionResult Reports()
        {
            ViewData["Message"] = "Your reports page.";

            return View();
        }
        [HttpGet]
        public IActionResult GetCandidates()
        {
  
            return View();
        }
        public IActionResult Questions()
        {
            ViewData["Message"] = "Your questions page.";

            return View();
        }


        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
