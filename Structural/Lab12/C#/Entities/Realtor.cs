using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace C_.Entities
{
    public class Realtor : Person
    {
        public List<RealEstate> RealEstates {get; set;} = new List<RealEstate>();
        double YearsOfWork{ get; set; }
        public Realtor(string nameAndSurname, string phone, string email, double yearsOfWork):base(nameAndSurname, phone, email) {
            YearsOfWork = yearsOfWork;
        }

        public Realtor(Realtor realtor):base(realtor.NameAndSurname, realtor.Phone, realtor.Email) {
            this.Id =realtor.Id;
            this.RealEstates = realtor.RealEstates;
        }

        public override string ToString()
        {
            return $"Realtor:\nId:{Id}, Name and surname: {NameAndSurname},\nPhone number: {Phone}, Email: {Email}, Years of work {YearsOfWork}";
        }
    }
}
