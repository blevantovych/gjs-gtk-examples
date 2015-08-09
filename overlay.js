#!/usr/bin/gjs

const Gtk = imports.gi.Gtk;

Gtk.init(null);

let window = new Gtk.Window({type: Gtk.WindowType.TOPLEVEL});
window.set_title("Overlay");
window.set_default_size(200, 200);
window.connect("destroy", Gtk.main_quit);

let overlay = new Gtk.Overlay();
window.add(overlay);

let textview = new Gtk.TextView();
textview.set_vexpand(true);
textview.set_hexpand(true);
overlay.add(textview);

let button = new Gtk.Button({label: "Overlayed Button"});
button.set_valign(Gtk.Align.CENTER)
button.set_halign(Gtk.Align.CENTER)
overlay.add_overlay(button);

window.show_all();

Gtk.main();
