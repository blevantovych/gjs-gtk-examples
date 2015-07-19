#!/usr/bin/gjs

const Gtk = imports.gi.Gtk;

Gtk.init(null);

let window = new Gtk.Window({type: Gtk.WindowType.TOPLEVEL});
window.set_title("Grid");
window.set_default_size(200, 200);
window.set_border_width(5);
window.connect("destroy", Gtk.main_quit);

let frame = new Gtk.Frame();
frame.set_label("Frame Example");
window.add(frame);

let label = new Gtk.Label();
label.set_label("Label in a Frame")
frame.add(label);

window.show_all();

Gtk.main();
