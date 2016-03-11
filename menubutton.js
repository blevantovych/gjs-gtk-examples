#!/usr/bin/env gjs

const Gtk = imports.gi.Gtk;

Gtk.init(null);

let window = new Gtk.Window({type: Gtk.WindowType.TOPLEVEL});
window.set_title("MenuButton");
window.connect("destroy", Gtk.main_quit);

let menubutton = new Gtk.MenuButton({label: "MenuButton"});
window.add(menubutton);

let menu = new Gtk.Menu();
menubutton.set_popup(menu);

for (var i=1; i<6; i++)
{
    let menuitem = new Gtk.MenuItem({label: "MenuItem " + i});
    menu.append(menuitem);
}

menu.show_all();
window.show_all();

Gtk.main();
