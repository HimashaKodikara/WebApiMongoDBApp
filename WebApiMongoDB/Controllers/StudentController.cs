using Microsoft.AspNetCore.Mvc;
using WebApiMongoDB.Models;
using WebApiMongoDB.Services;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace WebApiMongoDB.Controllers
{
    [Route("api/student")]
    [ApiController]
    public class StudentController : ControllerBase
    {
        private readonly StudentServices _studentServices;

        public StudentController(StudentServices studentServices)
        {
            _studentServices = studentServices;
        }


        // GET: api/<StudentController>
        [HttpGet]
        public async Task<List<Student>> Get()=> await _studentServices.GetAsync();
        

        // GET api/<StudentController>/64a5109c925955cfda51194
        [HttpGet("{id:lenght(24)}")]
        public async Task<ActionResult<Student>> Get(string id)
        {
            Student student = await _studentServices.GetAsync(id);
            if(student == null) 
            {
                return NotFound();
            }
            return student;
        }

        // POST api/<StudentController>
        [HttpPost]
        public async Task<ActionResult<Student>> Post(Student newStudent)
        {
            await _studentServices.CreateAsync(newStudent);
            return CreatedAtAction(nameof(Get), new { id = newStudent.id}, newStudent);
                
        }

        // PUT api/<StudentController>/64a5109c925955cfda51194
        [HttpPut("{id:lenght(24)}")]
        public async Task<ActionResult> Put(string id, Student updateStudent)
        {
            Student student = await _studentServices.GetAsync(id);
            if(student == null)
            {
                return NotFound("There is no student with this id :"+id);
            }
            updateStudent.id = student.id;
            await _studentServices.UpdateAsync(id, updateStudent);

            return Ok("Updated Succesffuly");
        }

        // DELETE api/<StudentController>/64a5109c925955cfda51194
        [HttpDelete("{id}")]
        public async Task<ActionResult> Delete(string id)
        {
            Student student = await _studentServices.GetAsync(id);
            if (student == null)
            {
                return NotFound("There is no student with this id :" + id);
            }
            
            await _studentServices.RemoveAsync(id);

            return Ok("Updated Succesffuly");
        }
    }
}
