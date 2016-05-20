#!/usr/bin/env gjs

const Gtk = imports.gi.Gtk;

Gtk.init(null);

var window = new Gtk.Window();
window.set_title("AspectFrame");
window.set_default_size(200, 200);
window.set_border_width(5);
window.connect("destroy", Gtk.main_quit);

var aspectframe = new Gtk.AspectFrame({xalign: 0,
                                       yalign: 0,
                                       ratio: 1.0,
                                       obey_child: false});
aspectframe.set_label("AspectFrame Example");
window.add(aspectframe);

var label = new Gtk.Label();
label.set_label("Label in an AspectFrame");
aspectframe.add(label);

window.show_all();

Gtk.main();
