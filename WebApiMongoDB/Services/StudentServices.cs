using MongoDB.Driver;
using WebApiMongoDB.Models;

namespace WebApiMongoDB.Services
{
    public class StudentServices
    {
        private readonly IMongoCollection<Student> studentcollection;
    }
}
