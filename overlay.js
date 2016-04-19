#!/usr/bin/env gjs

const Gtk = imports.gi.Gtk;

Gtk.init(null);

var window = new Gtk.Window();
window.set_title("Overlay");
window.set_default_size(200, 200);
window.connect("destroy", Gtk.main_quit);

var overlay = new Gtk.Overlay();
window.add(overlay);

var textview = new Gtk.TextView();
textview.set_vexpand(true);
textview.set_hexpand(true);
overlay.add(textview);

var button = new Gtk.Button({label: "Overlayed Button"});
button.set_valign(Gtk.Align.CENTER)
button.set_halign(Gtk.Align.CENTER)
overlay.add_overlay(button);

window.show_all();

Gtk.main();
