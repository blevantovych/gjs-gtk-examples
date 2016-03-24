#!/usr/bin/env gjs

const Gtk = imports.gi.Gtk;

Gtk.init(null);

function on_check_button_toggled(checkbutton)
{
    if (checkbutton.get_active())
        print("CheckButton " + checkbutton.value + " toggled on");
    else
        print("CheckButton " + checkbutton.value + " toggled off");
}

let window = new Gtk.Window({type: Gtk.WindowType.TOPLEVEL});
window.set_title("CheckButton");
window.connect("destroy", Gtk.main_quit);

let grid = new Gtk.Grid();
window.add(grid);

let checkbutton1 = new Gtk.CheckButton({label: "CheckButton 1"});
checkbutton1.value = 1;
checkbutton1.connect("toggled", function() {on_check_button_toggled(checkbutton1)})
grid.attach(checkbutton1, 0, 0, 1, 1);

let checkbutton2 = new Gtk.CheckButton({label: "CheckButton 2"});
checkbutton2.value = 2;
checkbutton2.connect("toggled", function() {on_check_button_toggled(checkbutton2)})
grid.attach(checkbutton2, 0, 1, 1, 1);

window.show_all();

Gtk.main();
