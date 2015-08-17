#!/usr/bin/gjs

const Gtk = imports.gi.Gtk;

Gtk.init(null);

let window = new Gtk.Window({type: Gtk.WindowType.TOPLEVEL});
window.set_title("Expander");
window.set_default_size(200, 200);
window.connect("destroy", Gtk.main_quit);

let expander = new Gtk.Expander({label: "Click to open/close"});
window.add(expander);

let label1 = new Gtk.Label({label: "Label contained within\nan Expander"});
expander.add(label1);

window.show_all();

Gtk.main();
