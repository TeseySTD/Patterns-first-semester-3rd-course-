using System;
using System.Collections.Generic;
using System.Text;
using C_.Entities;

namespace C_
{
    public abstract class AbstractSubsystem
    {
        public abstract void MainAction(IEnumerable<AgencyObject> agencyObjects, bool notify = true);

    }
}
