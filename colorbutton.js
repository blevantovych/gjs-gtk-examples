#!/usr/bin/env gjs

const Gtk = imports.gi.Gtk;

Gtk.init(null);

function on_color_set(colorbutton)
{
    var rgba = colorbutton.get_rgba();
    print("Red: " + rgba.red);
    print("Green: " + rgba.green);
    print("Blue: " + rgba.blue);
}

var window = new Gtk.Window();
window.set_default_size(200, -1);
window.set_title("ColorButton");
window.connect("destroy", Gtk.main_quit);

var colorbutton = new Gtk.ColorButton();
colorbutton.set_use_alpha(true);
colorbutton.connect("color-set", on_color_set);
window.add(colorbutton);

window.show_all();

Gtk.main();
