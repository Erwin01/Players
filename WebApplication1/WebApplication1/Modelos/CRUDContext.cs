using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.Entity; /*Agregamos la libreria*/

namespace CRUD.Modelos
{
    public class CRUDContext : DbContext
    {
        public DbSet<CRUD.Modelos.Jugador> Jugador { get; set; }

    }
}