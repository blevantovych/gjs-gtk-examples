#!/usr/bin/env gjs

const Gtk = imports.gi.Gtk;

Gtk.init(null);

function on_radio_button_toggled(radiobutton)
{
    if (radiobutton.get_active())
        print("RadioButton " + radiobutton.value + " toggled")
}

var window = new Gtk.Window();
window.set_title("RadioButton");
window.connect("destroy", Gtk.main_quit);

var grid = new Gtk.Grid()
window.add(grid);

var radiobutton1 = new Gtk.RadioButton({label: "RadioButton 1"});
radiobutton1.value = 1;
radiobutton1.connect("toggled", function() {on_radio_button_toggled(radiobutton1)})
grid.attach(radiobutton1, 0, 0, 1, 1);

var radiobutton2 = new Gtk.RadioButton({label: "RadioButton 2"});
radiobutton2.value = 2;
radiobutton2.connect("toggled", function() {on_radio_button_toggled(radiobutton2)})
radiobutton2.join_group(radiobutton1);
grid.attach(radiobutton2, 0, 1, 1, 1);

window.show_all();

Gtk.main();
