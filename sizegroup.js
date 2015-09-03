#!/usr/bin/gjs

const Gtk = imports.gi.Gtk;

Gtk.init(null);

let window = new Gtk.Window({type: Gtk.WindowType.TOPLEVEL});
window.set_title("SizeGroup");
window.connect("destroy", Gtk.main_quit);

let grid = new Gtk.Grid()
window.add(grid);

let sizegroup = new Gtk.SizeGroup();
sizegroup.set_mode(Gtk.SizeGroupMode.BOTH);

let button = new Gtk.Button({label: "Asia"});
sizegroup.add_widget(button);
grid.attach(button, 0, 0, 1, 1);

let button = new Gtk.Button({label: "Europe"});
sizegroup.add_widget(button);
grid.attach(button, 0, 1, 1, 1);

let button = new Gtk.Button({label: "North\nAmerica"});
sizegroup.add_widget(button);
grid.attach(button, 0, 2, 1, 1);

window.show_all();

Gtk.main();
