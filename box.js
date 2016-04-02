#!/usr/bin/env gjs

const Gtk = imports.gi.Gtk;

Gtk.init(null);

var window = new Gtk.Window({type: Gtk.WindowType.TOPLEVEL});
window.set_default_size(200, 200);
window.set_title("Box");
window.connect("destroy", Gtk.main_quit);

var box1 = new Gtk.Box();
box1.set_spacing(5);
window.add(box1);

var box2 = new Gtk.Box();
box2.set_orientation(Gtk.Orientation.VERTICAL);
box2.set_spacing(5);
box1.add(box2);

var label = new Gtk.Label({label: "Label in HBox"});
box1.pack_start(label, true, true, 0);
var label = new Gtk.Label({label: "Label in HBox"});
box1.pack_start(label, true, true, 0);

var label = new Gtk.Label({label: "Label in VBox"});
box2.pack_start(label, true, true, 0);
var label = new Gtk.Label({label: "Label in VBox"});
box2.pack_start(label, true, true, 0);

window.show_all();

Gtk.main();
