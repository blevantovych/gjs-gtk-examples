#!/usr/bin/env gjs

const Gtk = imports.gi.Gtk;

Gtk.init(null);

function on_font_button_font_set(fontbutton)
{
    print(fontbutton.get_font())
}

var window = new Gtk.Window();
window.set_title("FontButton");
window.connect("destroy", Gtk.main_quit);

var fontbutton = new Gtk.FontButton();
fontbutton.connect("font-set", function() {on_font_button_font_set(fontbutton)});
window.add(fontbutton);

window.show_all();

Gtk.main();
