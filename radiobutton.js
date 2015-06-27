#!/usr/bin/gjs

const Gtk = imports.gi.Gtk;

Gtk.init(null);

function on_radio_button_toggled(widget)
{
    if (widget.get_active())
        print("RadioButton " + widget.value + " toggled")
}

let window = new Gtk.Window({type: Gtk.WindowType.TOPLEVEL});
window.set_title("CheckButton");
window.connect("destroy", Gtk.main_quit);

let grid = new Gtk.Grid()
window.add(grid);

let radiobutton1 = new Gtk.RadioButton({label: "RadioButton 1"});
radiobutton1.value = 1;
radiobutton1.connect("toggled", function() {on_radio_button_toggled(radiobutton1)})
grid.attach(radiobutton1, 0, 0, 1, 1);

let radiobutton2 = new Gtk.RadioButton({label: "RadioButton 2"});
radiobutton2.value = 2;
radiobutton2.connect("toggled", function() {on_radio_button_toggled(radiobutton2)})
radiobutton2.join_group(radiobutton1);
grid.attach(radiobutton2, 0, 1, 1, 1);

window.show_all();

Gtk.main();
