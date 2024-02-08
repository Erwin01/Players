using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CRUD.Modelos
{
    public class Jugador
    {
        public int JugadorID { get; set; }
        public string Nombre { get; set; }
        public string Club { get; set; }
        public int Edad { get; set; }
        public string Direccion { get; set; }
        public int Telefono { get; set; }
        public string CorreoElectronico { get; set; }
        
        //public int Goles { get; set; }

    }
}
