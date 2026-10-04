using FlowerShopWebApplication.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace FlowerShopWebApplication.Controllers
{
    public class ModuleController : Controller
    {
        public ActionResult HomePage() 
        {
            return View();
        }

        public ActionResult AboutPage()

        {
            return View();
        }

        public ActionResult ContactPage()
        {
            return View();
        }

        public ActionResult LoginPage()
        {
            return View();
        }

        public ActionResult RegistrationPage()
        {
            return View();
        }


        public string GetWelcomeMessage()
        {
            return "Where flowers tells your story";
        }

        public string GetWelcomeSubtitle()
        {
            return "Fresh flowers, thoughtfully arranged for every occasion";

        }

        public string GetLoginMessage()
        {
            return "Login Successful! Welcome";

        }

        public string DeleteUser()
        {
            return "Deleted";
        }





        //public string UpdateUsername(string username)
        //{
        //    var updatedUsername = username + "-" + "updated";
        //    return updatedUsername;

        //}

        //public JsonResult UserVerification(UserModel umodel) 
        //{

        //    try 
        //    {

        //        throw new Exception("kita mo to");

        //        return Json("sasasaas", JsonRequestBehavior.AllowGet);

        //    }

        //    catch(Exception ex)
        //    {

        //        var errorMessage = ex.Message;
        //        var errorInnerException = ex.InnerException; // detailed error
        //        var errorStack = ex.StackTrace;


        //        return Json(errorMessage, JsonRequestBehavior.AllowGet);
        //    }

        //}



    }

    }
