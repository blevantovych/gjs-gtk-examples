#!/usr/bin/env gjs

const Gtk = imports.gi.Gtk;

Gtk.init(null);

let window = new Gtk.Window({type: Gtk.WindowType.TOPLEVEL});
window.set_title("Separator");
window.set_default_size(400, 200);
window.connect("destroy", Gtk.main_quit);

let grid = new Gtk.Grid();
window.add(grid);

let separator = new Gtk.Separator();
separator.set_hexpand(true);
separator.set_vexpand(true);
grid.attach(separator, 0, 0, 1, 1)

let separator = new Gtk.Separator();
separator.set_orientation(Gtk.Orientation.VERTICAL);
separator.set_hexpand(true);
separator.set_vexpand(true);
grid.attach(separator, 1, 0, 1, 1)

window.show_all();

Gtk.main();
