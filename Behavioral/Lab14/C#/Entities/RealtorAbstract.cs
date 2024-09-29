using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace C_.Entities
{
    public class RealtorAbstract : Person
    {
        protected RealtorAbstract _realtor;
        double YearsOfWork{ get; set; }
        public RealtorAbstract(string nameAndSurname, string phone, string email, double yearsOfWork):base(nameAndSurname, phone, email) {
            YearsOfWork = yearsOfWork;
        }

        public RealtorAbstract(RealtorAbstract realtor):base(realtor.NameAndSurname, realtor.Phone, realtor.Email) {
            this.Id =realtor.Id;
        }

        public RealtorAbstract SetNext(RealtorAbstract realtor) {
            _realtor = realtor;
            return _realtor;
        }

        public virtual void SellEstate(Customer customer, RealEstate estate)
        {
            Console.WriteLine($"{NameAndSurname} is selling {estate.GetType().Name} to {customer.NameAndSurname} with price {estate.PriceInUSD}$");
        }
        
        public override string ToString()
        {
            return $"Realtor:\nId:{Id}, Name and surname: {NameAndSurname},\nPhone number: {Phone}, Email: {Email}, Years of work {YearsOfWork}";
        }

    }
}
