#!/usr/bin/gjs

const Gtk = imports.gi.Gtk;

Gtk.init(null);

let window = new Gtk.Window({type: Gtk.WindowType.TOPLEVEL});
window.set_default_size(200, 200);
window.set_title("ActionBar");
window.connect("destroy", Gtk.main_quit);

let grid = new Gtk.Grid();
window.add(grid);

let actionbar = new Gtk.ActionBar();
actionbar.set_hexpand(true);
grid.attach(actionbar, 0, 1, 1, 1);

let label = new Gtk.Label({label: ""});
label.set_vexpand(true);
grid.attach(label, 0, 0, 1, 1);

let button = new Gtk.Button({label: "Cut"});
actionbar.pack_start(button);
let button = new Gtk.Button({label: "Copy"});
actionbar.pack_start(button);
let button = new Gtk.Button({label: "Paste"});
actionbar.pack_end(button);

window.show_all();

Gtk.main();
