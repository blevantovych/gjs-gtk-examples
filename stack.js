#!/usr/bin/gjs

const Gtk = imports.gi.Gtk;

Gtk.init(null);

function on_page_clicked(page)
{
    stack.set_visible_child_name(page);
}

let window = new Gtk.Window({type: Gtk.WindowType.TOPLEVEL});
window.set_title("Spinner");
window.set_default_size(200, 200);
window.connect("destroy", Gtk.main_quit);

let grid = new Gtk.Grid();
window.add(grid);

let stack = new Gtk.Stack();
stack.set_vexpand(true);
stack.set_hexpand(true);
grid.attach(stack, 0, 0, 2, 1);

let label = new Gtk.Label({label: "Page 1"});
stack.add_named(label, "Page1");

let label = new Gtk.Label({label: "Page 2"});
stack.add_named(label, "Page2");

let button = new Gtk.Button({label: "Page 1"});
button.connect("clicked", function() {on_page_clicked("Page1")});
grid.attach(button, 0, 1, 1, 1);
let button = new Gtk.Button({label: "Page 2"});
button.connect("clicked", function() {on_page_clicked("Page2")});
grid.attach(button, 1, 1, 1, 1);

window.show_all();

Gtk.main();
