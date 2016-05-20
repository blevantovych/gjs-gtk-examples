#!/usr/bin/env gjs

const Gtk = imports.gi.Gtk;

Gtk.init(null);

var window = new Gtk.Window();
window.set_title("Frame");
window.set_default_size(200, 200);
window.set_border_width(5);
window.connect("destroy", Gtk.main_quit);

var frame = new Gtk.Frame();
frame.set_label("Frame Example");
window.add(frame);

var label = new Gtk.Label();
label.set_label("Label in a Frame");
frame.add(label);

window.show_all();

Gtk.main();
