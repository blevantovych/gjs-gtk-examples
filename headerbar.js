#!/usr/bin/gjs

const Gtk = imports.gi.Gtk;

Gtk.init(null);

let window = new Gtk.Window({type: Gtk.WindowType.TOPLEVEL});
window.set_title("HeaderBar");
window.set_default_size(-1, 200);
window.connect("destroy", Gtk.main_quit);

let grid = new Gtk.Grid();
window.add(grid);

let headerbar = new Gtk.HeaderBar();
headerbar.set_title("HeaderBar");
headerbar.set_subtitle("With Subtitle");
headerbar.set_show_close_button(true);
headerbar.set_vexpand(false);
grid.attach(headerbar, 0, 0, 1, 1);

let label = new Gtk.Label({label: "Window content below a HeaderBar"});
grid.attach(label, 0, 1, 1, 1);

window.show_all();

Gtk.main();
