using System.Web.Mvc;
using CRUD.Modelos;
using System.Collections.Generic;
using System.Linq;

namespace CRUD.Controladores
{
    public class JugadorController : Controller
    {

        private CRUDContext context = null;

        public JugadorController() {

            context = new CRUDContext();
        }

        // GET: Jugador
        public JsonResult GetJugador()
        {
            List<Jugador> jugadorLista = context.Jugador.ToList();
            return Json(new { List = jugadorLista }, JsonRequestBehavior.AllowGet);
        }

        public JsonResult GetJugadorId(int id)
        {
            Jugador jugador = context.Jugador.Where(c => c.JugadorID == id).SingleOrDefault();
            return Json(new { jugador = jugador}, JsonRequestBehavior.AllowGet);
        }

        public JsonResult AgregarJugador(Jugador jugador) {

            context.Jugador.Add(jugador);
            context.SaveChanges();
            return Json(new { status = "Jugador Insertado Correctamente!!!" });
        }

        public JsonResult ActualizarJugador(Jugador jugador)
        {
            context.Entry(jugador).State = System.Data.Entity.EntityState.Modified;
            context.SaveChanges();
            return Json(new { status = "Jugador Actualizado Correctamente!!!" });
        }

        public JsonResult EliminarJugador(int id) {

            Jugador jugador = context.Jugador.Where(c => c.JugadorID == id).SingleOrDefault();
            context.Jugador.Remove(jugador);
            context.SaveChanges();
            return Json(new { status = "Jugador Eliminado Correctamente!!!" });
        }
    }
}
