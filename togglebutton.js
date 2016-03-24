#!/usr/bin/env gjs

const Gtk = imports.gi.Gtk;

Gtk.init(null);

function on_toggle_button_toggled(togglebutton)
{
    if (togglebutton.get_active())
        print("ToggleButton " + togglebutton.value + " toggled on")
    else
        print("ToggleButton " + togglebutton.value + " toggled off")
}

let window = new Gtk.Window({type: Gtk.WindowType.TOPLEVEL});
window.set_title("ToggleButton");
window.connect("destroy", Gtk.main_quit);

let grid = new Gtk.Grid();
window.add(grid);

let togglebutton1 = new Gtk.ToggleButton({label: "togglebutton 1"});
togglebutton1.value = 1;
togglebutton1.connect("toggled", function() {on_toggle_button_toggled(togglebutton1)})
grid.attach(togglebutton1, 0, 0, 1, 1);

let togglebutton2 = new Gtk.ToggleButton({label: "togglebutton 2"});
togglebutton2.value = 2;
togglebutton2.connect("toggled", function() {on_toggle_button_toggled(togglebutton2)})
grid.attach(togglebutton2, 0, 1, 1, 1);

window.show_all();

Gtk.main();
