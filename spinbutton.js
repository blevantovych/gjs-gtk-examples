#!/usr/bin/env gjs

const Gtk = imports.gi.Gtk;

Gtk.init(null);

function on_spin_button_changed(spinbutton)
{
    print(spinbutton.get_value_as_int());
}

let window = new Gtk.Window({type: Gtk.WindowType.TOPLEVEL});
window.set_title("SpinButton");
window.connect("destroy", Gtk.main_quit);

let spinbutton = new Gtk.SpinButton();
spinbutton.set_range(0, 10);
spinbutton.set_increments(1, 10);
spinbutton.set_value(3);
spinbutton.connect("value-changed", function() {on_spin_button_changed(spinbutton)});
window.add(spinbutton);

window.show_all();

Gtk.main();
