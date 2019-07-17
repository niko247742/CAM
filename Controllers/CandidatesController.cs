using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CAM.Data.Services;
using Microsoft.AspNetCore.Mvc;

namespace CAM.Website.Controllers
{
    [Route("api/candidates")]
    public class CandidatesController : Controller
    {
        private readonly ICandidateServices _candidateServices;


        public CandidatesController(ICandidateServices candidateServices)
        {
            _candidateServices = candidateServices;
        }

        [HttpGet]
        public IActionResult GetCandidates()
        {
            var candidates = _candidateServices.GetAll();


            return Ok(candidates);
        }
    }
}