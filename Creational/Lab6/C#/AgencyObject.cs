namespace C_
{
    public abstract class AgencyObject
    {  
        private static int _maxId = 0;    
        public int Id {get; set;}
        public AgencyObject(){
            Id = _maxId;
            _maxId += 1;
        }
    }

}

