#!/usr/bin/gjs

const Gtk = imports.gi.Gtk;

Gtk.init(null);

let window = new Gtk.Window({type: Gtk.WindowType.TOPLEVEL});
window.set_title("Image");
window.connect("destroy", Gtk.main_quit);

let image = new Gtk.Image();
image.set_from_file("gtk.png");
window.add(image);

window.show_all();

Gtk.main();
