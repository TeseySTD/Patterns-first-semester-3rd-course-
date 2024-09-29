namespace C_
{
    public abstract class Person : AgencyObject
    {
        public string NameAndSurname { get; set; }
        public string Phone { get; set; }
        public string Email { get; set; }

        public Person(string nameAndSurname, string phone, string email):base() { 
            NameAndSurname = nameAndSurname;
            Phone = phone;
            Email = email;
        }

        public Person():base(){
            NameAndSurname = "Jane Doe";
            Phone = "8 800 555 35 35";
            Email = "example@gmail.com";
        }
    }
}


