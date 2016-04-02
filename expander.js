#!/usr/bin/env gjs

const Gtk = imports.gi.Gtk;

Gtk.init(null);

var window = new Gtk.Window({type: Gtk.WindowType.TOPLEVEL});
window.set_title("Expander");
window.set_default_size(200, 200);
window.connect("destroy", Gtk.main_quit);

var expander = new Gtk.Expander({label: "Click to open/close"});
window.add(expander);

var label = new Gtk.Label({label: "Label contained within\nan Expander"});
expander.add(label);

window.show_all();

Gtk.main();
