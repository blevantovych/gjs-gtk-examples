#!/usr/bin/env gjs

const Gtk = imports.gi.Gtk;

Gtk.init(null);

function on_check_button_toggled(checkbutton)
{
    if (checkbutton.get_active())
    {
        var label = checkbutton.get_label();
        print(label + " is present");
    }
}

var window = new Gtk.Window();
window.set_title("CheckButton");
window.connect("destroy", Gtk.main_quit);

var grid = new Gtk.Grid();
window.add(grid);

var checkbutton1 = new Gtk.CheckButton({label: "Kylie"});
checkbutton1.connect("toggled", function() {on_check_button_toggled(checkbutton1)})
grid.attach(checkbutton1, 0, 0, 1, 1);
var checkbutton2 = new Gtk.CheckButton({label: "Samantha"});
checkbutton2.connect("toggled", function() {on_check_button_toggled(checkbutton2)})
grid.attach(checkbutton2, 0, 1, 1, 1);
var checkbutton3 = new Gtk.CheckButton({label: "Becky"});
checkbutton3.connect("toggled", function() {on_check_button_toggled(checkbutton3)})
grid.attach(checkbutton3, 0, 2, 1, 1);

window.show_all();

Gtk.main();
