using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace C_
{
    public class Realtor
    {
        public int Id { get; set; }
        public string NameAndSurname { get; set; }
        public string Phone { get; set; }
        public string Email { get; set; }

        public Realtor(int id, string nameAndSurname, string phone, string email) { 
            Id = id;
            NameAndSurname = nameAndSurname;
            Phone = phone;
            Email = email;
        }

        public Realtor(Realtor realtor){
            Id = realtor.Id;
            NameAndSurname = realtor.NameAndSurname;
            Phone = realtor.Phone;
            Email = realtor.Email;
        }

        public override string ToString()
        {
            return $"Realtor:\nId:{Id}, Name and surname: {NameAndSurname},\nPhone number: {Phone}, Email: {Email}";
        }
    }
}
