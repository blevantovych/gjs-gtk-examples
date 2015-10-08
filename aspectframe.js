#!/usr/bin/env gjs

const Gtk = imports.gi.Gtk;

Gtk.init(null);

let window = new Gtk.Window({type: Gtk.WindowType.TOPLEVEL});
window.set_title("AspectFrame");
window.set_default_size(200, 200);
window.set_border_width(5);
window.connect("destroy", Gtk.main_quit);

let aspectframe = new Gtk.AspectFrame({xalign: 0, yalign: 0, ratio: 1.0, obey_child: false});
aspectframe.set_label("AspectFrame Example");
window.add(aspectframe);

let label = new Gtk.Label();
label.set_label("Label in an AspectFrame")
aspectframe.add(label);

window.show_all();

Gtk.main();
