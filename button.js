#!/usr/bin/env gjs

const Gtk = imports.gi.Gtk;

Gtk.init(null);

function on_button_clicked()
{
    print("Button clicked!");
}

let window = new Gtk.Window({type: Gtk.WindowType.TOPLEVEL});
window.set_title("Button");
window.connect("destroy", Gtk.main_quit);

let button = new Gtk.Button({label: "Button"});
button.connect("clicked", function() {on_button_clicked()});
window.add(button);

window.show_all();

Gtk.main();
