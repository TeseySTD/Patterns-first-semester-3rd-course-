using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace C_
{
    public class Realtor : Person
    {
        double YearsOfWork{ get; set; }
        public Realtor(int id, string nameAndSurname, string phone, string email, double yearsOfWork):base(id, nameAndSurname, phone, email) {
            YearsOfWork = yearsOfWork;
        }

        public Realtor(Realtor realtor):base(realtor.Id, realtor.NameAndSurname, realtor.Phone, realtor.Email) { }

        public override string ToString()
        {
            return $"Realtor:\nId:{Id}, Name and surname: {NameAndSurname},\nPhone number: {Phone}, Email: {Email}, Years of work {YearsOfWork}";
        }
    }
}
