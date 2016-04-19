#!/usr/bin/env gjs

const Gtk = imports.gi.Gtk;

Gtk.init(null);

function on_button_clicked()
{
    print("Button clicked!");
}

var window = new Gtk.Window();
window.set_title("Button");
window.connect("destroy", Gtk.main_quit);

var button = new Gtk.Button({label: "Button"});
button.connect("clicked", on_button_clicked);
window.add(button);

window.show_all();

Gtk.main();
