﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using WishList.Data;
using WishList.Models;

namespace WishList.Controllers
{
    public class ItemController : Controller
    {
        private ApplicationDbContext _context;
        public ItemController(ApplicationDbContext context)
        {
            _context = context;
        }
        public IActionResult Index()
        {
            return View("Index");
        }
        [HttpGet]
        public IActionResult Create()
        {
            return View("Create");
        }

        [HttpPost]
        public IActionResult Create(Item itemz)
        {
            var item = new Item();
            item.Description = "ddffkkk";
            item.Id = 1;
            _context.Items.Add(item);
            _context.SaveChanges();
            

           return RedirectToAction("Index");
        }

        public IActionResult Delete(int Id)
        {
            var item = _context.Items.Find(Id);
            _context.Items.Remove(item);
            _context.SaveChanges();
            return RedirectToAction("Index");
        }
    }
}
