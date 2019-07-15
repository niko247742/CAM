using CAM.Data.DataModels;
using CAM.Models;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

namespace CAM.Controllers
{
    public class HomeController : Controller
    {
        private readonly CAMDataContext _context;
        public HomeController(CAMDataContext context)
        {
            _context = context;
        }
        public IActionResult Index()
        {
            return View();
        }
        [Route("home/reports")]
        public IActionResult Reports()
        {
            ViewData["Message"] = "Your reports page.";

            return View();
        }
        [Route("api/candidates/")]
        public IActionResult GetCandidates()
        {
            ViewData["Message"] = "Your candidates page.";

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
