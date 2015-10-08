#!/usr/bin/env gjs

const Gtk = imports.gi.Gtk;

Gtk.init(null);

function on_button_start_clicked()
{
    spinner.start();
}

function on_button_stop_clicked()
{
    spinner.stop();
}

let window = new Gtk.Window({type: Gtk.WindowType.TOPLEVEL});
window.set_title("Spinner");
window.set_default_size(200, 200);
window.connect("destroy", Gtk.main_quit);

let grid = new Gtk.Grid();
window.add(grid);

let spinner = new Gtk.Spinner();
spinner.set_vexpand(true);
spinner.set_hexpand(true);
grid.attach(spinner, 0, 0, 2, 1);

let button = new Gtk.Button({label: "Start"});
button.connect("clicked", function() {on_button_start_clicked()});
grid.attach(button, 0, 1, 1, 1);
let button = new Gtk.Button({label: "Stop"});
button.connect("clicked", function() {on_button_stop_clicked()});
grid.attach(button, 1, 1, 1, 1);

window.show_all();

Gtk.main();
